import { ref, computed, onMounted, onUnmounted } from "vue";

/**
 * Random counter with deterministic datetime-based start.
 *
 * @param {object} cfg
 * @param {string|Date} cfg.anchorDate     - mốc thời gian (ISO string hoặc Date)
 * @param {number} cfg.baseAtAnchor        - giá trị tại mốc anchor
 * @param {number} cfg.minDelay            - ms, tối thiểu 1s
 * @param {number} cfg.maxDelay            - ms, tối đa 10s (mặc định theo yêu cầu)
 * @param {number} cfg.minStep             - tối thiểu 1
 * @param {number} cfg.maxStep             - tối đa 10
 * @param {number} cfg.avgStep             - trung bình bước (mặc định 5.5 cho 1–10)
 * @param {number} cfg.avgDelay            - trung bình delay (mặc định 5500ms cho 1–10s)
 * @param {string} cfg.locale              - locale format số
 * @param {string} cfg.storageKey          - khóa lưu lastSeen để không bao giờ lùi
 */
export function useRandomCounter({
  anchorDate = "2025-01-01T00:00:00Z",
  baseAtAnchor = 8000,
  minDelay = 1000,
  maxDelay = 10000,
  minStep = 1,
  maxStep = 10,
  avgStep = 5.5,
  avgDelay = 5500,
  locale = "en-US",
  storageKey = "randomCounter:lastSeen"
} = {}) {
  const anchor = typeof anchorDate === "string" ? new Date(anchorDate) : anchorDate;

  // Tính giá trị khởi đầu theo thời gian: base + elapsed * rate
  const now = Date.now();
  const elapsedSeconds = Math.max(0, Math.floor((now - anchor.getTime()) / 1000));
  const ratePerSecond = avgStep / (avgDelay / 1000); // ~ 5.5 / 5.5 = ~1/s
  const derivedStart = baseAtAnchor + Math.floor(elapsedSeconds * ratePerSecond);

  // Đảm bảo không lùi bằng cách lấy max với lastSeen trong localStorage
  const lastSeen = Number.parseInt(localStorage.getItem(storageKey) || "0", 10);
  const initial = Number.isFinite(lastSeen) ? Math.max(derivedStart, lastSeen) : derivedStart;

  const counter = ref(initial);
  const formatted = computed(() => new Intl.NumberFormat(locale).format(counter.value));

  let timer = null;

  function nextDelay() {
    // random 1–10s
    return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
  }
  function nextStep() {
    // random 1–10
    return Math.floor(Math.random() * (maxStep - minStep + 1)) + minStep;
  }

  function schedule() {
    timer = setTimeout(() => {
      counter.value += nextStep();
      localStorage.setItem(storageKey, String(counter.value)); // cập nhật lastSeen
      schedule(); // lặp
    }, nextDelay());
  }

  onMounted(() => {
    // Lần mount đầu tiên cũng cập nhật lastSeen (phòng khi derivedStart < lastSeen)
    localStorage.setItem(storageKey, String(counter.value));
    schedule();
  });

  onUnmounted(() => {
    if (timer) clearTimeout(timer);
  });

  return {
    counter,
    formatted,
    /** Cho phép reset anchor base trong runtime nếu cần */
    setValue(val) {
      counter.value = val;
      localStorage.setItem(storageKey, String(val));
    },
    /** Dừng tăng tiếp (nếu cần) */
    stop() {
      if (timer) clearTimeout(timer);
      timer = null;
    }
  };
}
