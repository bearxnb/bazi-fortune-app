const STEMS = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const BRANCHES = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const STEM_ELEMENT = ["木", "木", "火", "火", "土", "土", "金", "金", "水", "水"];
const BRANCH_MAIN_ELEMENT = ["水", "土", "木", "木", "土", "火", "火", "土", "金", "金", "土", "水"];
const ELEMENTS = ["木", "火", "土", "金", "水"];

const RAW_CHINA_TOP50 = [
  { city: "北京", pinyin: "bei jing", tz: "Asia/Shanghai", lat: 39.9042, lon: 116.4074 },
  { city: "上海", pinyin: "shang hai", tz: "Asia/Shanghai", lat: 31.2304, lon: 121.4737 },
  { city: "深圳", pinyin: "shen zhen", tz: "Asia/Shanghai", lat: 22.5431, lon: 114.0579 },
  { city: "广州", pinyin: "guang zhou", tz: "Asia/Shanghai", lat: 23.1291, lon: 113.2644 },
  { city: "重庆", pinyin: "chong qing", tz: "Asia/Shanghai", lat: 29.563, lon: 106.5516 },
  { city: "苏州", pinyin: "su zhou", tz: "Asia/Shanghai", lat: 31.2989, lon: 120.5853 },
  { city: "成都", pinyin: "cheng du", tz: "Asia/Shanghai", lat: 30.5728, lon: 104.0668 },
  { city: "杭州", pinyin: "hang zhou", tz: "Asia/Shanghai", lat: 30.2741, lon: 120.1551 },
  { city: "武汉", pinyin: "wu han", tz: "Asia/Shanghai", lat: 30.5931, lon: 114.3054 },
  { city: "南京", pinyin: "nan jing", tz: "Asia/Shanghai", lat: 32.0603, lon: 118.7969 },
  { city: "天津", pinyin: "tian jin", tz: "Asia/Shanghai", lat: 39.1333, lon: 117.2 },
  { city: "宁波", pinyin: "ning bo", tz: "Asia/Shanghai", lat: 29.8683, lon: 121.544 },
  { city: "青岛", pinyin: "qing dao", tz: "Asia/Shanghai", lat: 36.0671, lon: 120.3826 },
  { city: "无锡", pinyin: "wu xi", tz: "Asia/Shanghai", lat: 31.4912, lon: 120.3119 },
  { city: "长沙", pinyin: "chang sha", tz: "Asia/Shanghai", lat: 28.2282, lon: 112.9388 },
  { city: "郑州", pinyin: "zheng zhou", tz: "Asia/Shanghai", lat: 34.7466, lon: 113.6254 },
  { city: "福州", pinyin: "fu zhou", tz: "Asia/Shanghai", lat: 26.0745, lon: 119.2965 },
  { city: "济南", pinyin: "ji nan", tz: "Asia/Shanghai", lat: 36.6512, lon: 117.1201 },
  { city: "泉州", pinyin: "quan zhou", tz: "Asia/Shanghai", lat: 24.8741, lon: 118.6757 },
  { city: "西安", pinyin: "xi an", tz: "Asia/Shanghai", lat: 34.3416, lon: 108.9398 },
  { city: "合肥", pinyin: "he fei", tz: "Asia/Shanghai", lat: 31.8206, lon: 117.2272 },
  { city: "南通", pinyin: "nan tong", tz: "Asia/Shanghai", lat: 31.9802, lon: 120.8943 },
  { city: "东莞", pinyin: "dong guan", tz: "Asia/Shanghai", lat: 23.0207, lon: 113.7518 },
  { city: "常州", pinyin: "chang zhou", tz: "Asia/Shanghai", lat: 31.8107, lon: 119.9741 },
  { city: "烟台", pinyin: "yan tai", tz: "Asia/Shanghai", lat: 37.4638, lon: 121.4479 },
  { city: "徐州", pinyin: "xu zhou", tz: "Asia/Shanghai", lat: 34.2058, lon: 117.2841 },
  { city: "唐山", pinyin: "tang shan", tz: "Asia/Shanghai", lat: 39.6305, lon: 118.1802 },
  { city: "大连", pinyin: "da lian", tz: "Asia/Shanghai", lat: 38.914, lon: 121.6147 },
  { city: "温州", pinyin: "wen zhou", tz: "Asia/Shanghai", lat: 27.9938, lon: 120.6994 },
  { city: "石家庄", pinyin: "shi jia zhuang", tz: "Asia/Shanghai", lat: 38.0428, lon: 114.5149 },
  { city: "昆明", pinyin: "kun ming", tz: "Asia/Shanghai", lat: 24.8801, lon: 102.8329 },
  { city: "沈阳", pinyin: "shen yang", tz: "Asia/Shanghai", lat: 41.8057, lon: 123.4315 },
  { city: "厦门", pinyin: "xia men", tz: "Asia/Shanghai", lat: 24.4798, lon: 118.0894 },
  { city: "南昌", pinyin: "nan chang", tz: "Asia/Shanghai", lat: 28.6829, lon: 115.8582 },
  { city: "嘉兴", pinyin: "jia xing", tz: "Asia/Shanghai", lat: 30.7461, lon: 120.7555 },
  { city: "泰州", pinyin: "tai zhou", tz: "Asia/Shanghai", lat: 32.4555, lon: 119.9253 },
  { city: "哈尔滨", pinyin: "ha er bin", tz: "Asia/Shanghai", lat: 45.7567, lon: 126.6424 },
  { city: "长春", pinyin: "chang chun", tz: "Asia/Shanghai", lat: 43.8171, lon: 125.3245 },
  { city: "绍兴", pinyin: "shao xing", tz: "Asia/Shanghai", lat: 30.0303, lon: 120.5821 },
  { city: "金华", pinyin: "jin hua", tz: "Asia/Shanghai", lat: 29.0895, lon: 119.6495 },
  { city: "贵阳", pinyin: "gui yang", tz: "Asia/Shanghai", lat: 26.647, lon: 106.6302 },
  { city: "潍坊", pinyin: "wei fang", tz: "Asia/Shanghai", lat: 36.7069, lon: 119.1618 },
  { city: "临沂", pinyin: "lin yi", tz: "Asia/Shanghai", lat: 35.0653, lon: 118.3264 },
  { city: "洛阳", pinyin: "luo yang", tz: "Asia/Shanghai", lat: 34.6197, lon: 112.454 },
  { city: "乌鲁木齐", pinyin: "wu lu mu qi", tz: "Asia/Shanghai", lat: 43.8256, lon: 87.6168 },
  { city: "呼和浩特", pinyin: "hu he hao te", tz: "Asia/Shanghai", lat: 40.8426, lon: 111.7492 },
  { city: "海口", pinyin: "hai kou", tz: "Asia/Shanghai", lat: 20.044, lon: 110.1983 },
  { city: "银川", pinyin: "yin chuan", tz: "Asia/Shanghai", lat: 38.4872, lon: 106.2309 },
  { city: "兰州", pinyin: "lan zhou", tz: "Asia/Shanghai", lat: 36.0611, lon: 103.8343 },
  { city: "太原", pinyin: "tai yuan", tz: "Asia/Shanghai", lat: 37.8706, lon: 112.5492 }
];

const CITY_DB = {
  "中国": buildSortedChinaTop50(),
  "台湾": [
    { city: "台北", pinyin: "tai bei", tz: "Asia/Taipei", lat: 25.033, lon: 121.5654 },
    { city: "台中", pinyin: "tai zhong", tz: "Asia/Taipei", lat: 24.1477, lon: 120.6736 },
    { city: "台南", pinyin: "tai nan", tz: "Asia/Taipei", lat: 22.9997, lon: 120.227 },
    { city: "新北", pinyin: "xin bei", tz: "Asia/Taipei", lat: 25.012, lon: 121.4657 },
    { city: "桃园", pinyin: "tao yuan", tz: "Asia/Taipei", lat: 24.9936, lon: 121.301 },
    { city: "高雄", pinyin: "gao xiong", tz: "Asia/Taipei", lat: 22.6273, lon: 120.3014 }
  ],
  "美国": [
    { city: "Chicago", pinyin: "chicago", tz: "America/Chicago", lat: 41.8781, lon: -87.6298 },
    { city: "Houston", pinyin: "houston", tz: "America/Chicago", lat: 29.7604, lon: -95.3698 },
    { city: "Los Angeles", pinyin: "los angeles", tz: "America/Los_Angeles", lat: 34.0522, lon: -118.2437 },
    { city: "New York", pinyin: "new york", tz: "America/New_York", lat: 40.7128, lon: -74.006 },
    { city: "Seattle", pinyin: "seattle", tz: "America/Los_Angeles", lat: 47.6062, lon: -122.3321 }
  ],
  "日本": [
    { city: "Osaka", pinyin: "osaka", tz: "Asia/Tokyo", lat: 34.6937, lon: 135.5023 },
    { city: "Tokyo", pinyin: "tokyo", tz: "Asia/Tokyo", lat: 35.6762, lon: 139.6503 }
  ],
  "新加坡": [{ city: "Singapore", pinyin: "singapore", tz: "Asia/Singapore", lat: 1.3521, lon: 103.8198 }],
  "英国": [{ city: "London", pinyin: "london", tz: "Europe/London", lat: 51.5074, lon: -0.1278 }]
};

const NAME_CHAR_ELEMENT_MAP = {
  "金": "金", "鑫": "金", "钰": "金", "铭": "金", "锋": "金", "锐": "金", "铠": "金",
  "木": "木", "林": "木", "森": "木", "柏": "木", "榕": "木", "楷": "木", "桐": "木", "梓": "木",
  "水": "水", "海": "水", "江": "水", "河": "水", "洋": "水", "涵": "水", "沐": "水", "润": "水", "涛": "水", "清": "水",
  "火": "火", "炎": "火", "炜": "火", "煜": "火", "烨": "火", "灿": "火", "彤": "火", "昭": "火",
  "土": "土", "坤": "土", "垚": "土", "城": "土", "培": "土", "宇": "土", "安": "土", "峰": "土"
};

// 台湾常见子平法：立春换年，节气定月。这里使用定气近似到“日”的工程算法。
const JIE_QI_C = {
  "小寒": { c20: 6.11, c21: 5.4055 },
  "立春": { c20: 4.6295, c21: 3.87 },
  "惊蛰": { c20: 6.3826, c21: 5.63 },
  "清明": { c20: 5.59, c21: 4.81 },
  "立夏": { c20: 6.318, c21: 5.52 },
  "芒种": { c20: 6.5, c21: 5.678 },
  "小暑": { c20: 7.928, c21: 7.108 },
  "立秋": { c20: 8.35, c21: 7.5 },
  "白露": { c20: 8.44, c21: 7.646 },
  "寒露": { c20: 9.098, c21: 8.318 },
  "立冬": { c20: 8.218, c21: 7.438 },
  "大雪": { c20: 7.9, c21: 7.18 }
};

const JIE_QI_MONTH = {
  "小寒": 1,
  "立春": 2,
  "惊蛰": 3,
  "清明": 4,
  "立夏": 5,
  "芒种": 6,
  "小暑": 7,
  "立秋": 8,
  "白露": 9,
  "寒露": 10,
  "立冬": 11,
  "大雪": 12
};

const JIE_QI_YEAR_CORRECTION = {
  "立春": { 2026: 1 },
  "小寒": { 2019: -1 },
  "清明": { 2008: 1 }
};

const MONTH_BRANCH_FROM_JIEQI = {
  "立春": 2,
  "惊蛰": 3,
  "清明": 4,
  "立夏": 5,
  "芒种": 6,
  "小暑": 7,
  "立秋": 8,
  "白露": 9,
  "寒露": 10,
  "立冬": 11,
  "大雪": 0,
  "小寒": 1
};

const MONTH_FLOW = ["小寒", "立春", "惊蛰", "清明", "立夏", "芒种", "小暑", "立秋", "白露", "寒露", "立冬", "大雪"];

const form = document.getElementById("fortune-form");
const countryEl = document.getElementById("country");
const cityEl = document.getElementById("city");
const timezoneEl = document.getElementById("timezone");
const lonEl = document.getElementById("longitude");
const latEl = document.getElementById("latitude");
const copyBtn = document.getElementById("copy-report");
const aiSection = document.getElementById("ai-section");
const aiContent = document.getElementById("ai-content");
const validationBadge = document.getElementById("validation-badge");

let latestReportText = "";
const engineValidation = runEngineValidation();

initLocationSelectors();
updateValidationBadge(engineValidation);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const fullName = document.getElementById("full-name").value.trim();
  const birthDate = document.getElementById("birth-date").value;
  const birthTime = document.getElementById("birth-time").value;
  const gender = document.getElementById("gender").value;
  const country = countryEl.value;
  const city = cityEl.value;
  const openaiKey = document.getElementById("openai-key").value.trim();

  if (!fullName || !birthDate || !birthTime || !country || !city) {
    alert("请完整填写姓名和出生信息。");
    return;
  }

  const cityInfo = CITY_DB[country].find((c) => c.city === city);
  const [year, month, day] = birthDate.split("-").map(Number);
  const [hour, minute] = birthTime.split(":").map(Number);
  const utcOffset = getUtcOffsetHoursForZone(cityInfo.tz, year, month, day, hour, minute);

  const trueSolarDate = toTrueSolarTime(year, month, day, hour, minute, cityInfo.lon, utcOffset);
  const bazi = calcBazi(trueSolarDate);
  const nameAnalysis = analyzeNameWuxing(fullName);
  const lifeAnalysis = analyzeLifeElements(bazi, nameAnalysis);
  const annual = calcAnnualFortune(bazi, new Date().getFullYear(), gender, lifeAnalysis);

  const ctx = {
    fullName,
    birth: { year, month, day, hour, minute, country, city },
    cityInfo,
    utcOffset,
    trueSolarDate,
    bazi,
    nameAnalysis,
    lifeAnalysis,
    annual,
    validation: engineValidation
  };

  renderReport(ctx);

  if (openaiKey) {
    aiSection.classList.remove("hidden");
    aiContent.textContent = "正在生成 AI 增强解读...";
    try {
      const aiText = await generateAiEnhancedText(ctx, openaiKey);
      aiContent.textContent = aiText;
      latestReportText += `\n\n【AI增强解读】\n${aiText}\n`;
    } catch (error) {
      aiContent.textContent = `AI 增强解读失败：${error.message}`;
    }
  } else {
    aiSection.classList.add("hidden");
    aiContent.textContent = "";
  }
});

copyBtn.addEventListener("click", async () => {
  if (!latestReportText) {
    alert("请先生成报告。");
    return;
  }
  try {
    await navigator.clipboard.writeText(latestReportText);
    alert("已复制纯文本报告。");
  } catch (_error) {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = latestReportText;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(textarea);
      if (!ok) throw new Error("execCommand copy failed");
      alert("已复制纯文本报告。");
    } catch (_innerError) {
      alert("复制失败，请手动选择文本复制。");
    }
  }
});

function buildSortedChinaTop50() {
  return [...RAW_CHINA_TOP50]
    .map((item) => ({ ...item, initials: toInitials(item.pinyin) }))
    .sort((a, b) => {
      const first = a.initials.localeCompare(b.initials);
      if (first !== 0) return first;
      return a.pinyin.localeCompare(b.pinyin);
    });
}

function toInitials(pinyin) {
  return pinyin.split(" ").filter(Boolean).map((w) => w[0]).join("");
}

function initLocationSelectors() {
  const countries = Object.keys(CITY_DB);
  countryEl.innerHTML = countries.map((c) => `<option value="${c}">${c}</option>`).join("");
  countryEl.addEventListener("change", refreshCities);
  cityEl.addEventListener("change", updateGeoFields);
  refreshCities();
}

function refreshCities() {
  const country = countryEl.value;
  const cities = CITY_DB[country] || [];
  cityEl.innerHTML = cities.map((c) => `<option value="${c.city}">${c.city}</option>`).join("");
  updateGeoFields();
}

function updateGeoFields() {
  const country = countryEl.value;
  const city = cityEl.value;
  const cityInfo = (CITY_DB[country] || []).find((c) => c.city === city);
  if (!cityInfo) return;

  const now = new Date();
  const offset = getUtcOffsetHoursForZone(cityInfo.tz, now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours(), now.getMinutes());
  timezoneEl.value = `${cityInfo.tz} (${formatUtcOffset(offset)})`;
  lonEl.value = cityInfo.lon.toFixed(4);
  latEl.value = cityInfo.lat.toFixed(4);
}

function getUtcOffsetHoursForZone(timeZone, year, month, day, hour, minute) {
  const utcGuess = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  const parts = dtf.formatToParts(utcGuess).reduce((acc, p) => {
    if (p.type !== "literal") acc[p.type] = p.value;
    return acc;
  }, {});

  const asUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second)
  );

  return (asUtc - utcGuess.getTime()) / 3600000;
}

function formatUtcOffset(offset) {
  const sign = offset >= 0 ? "+" : "-";
  const abs = Math.abs(offset);
  const hh = String(Math.floor(abs)).padStart(2, "0");
  const mm = String(Math.round((abs - Math.floor(abs)) * 60)).padStart(2, "0");
  return `UTC${sign}${hh}:${mm}`;
}

function toTrueSolarTime(year, month, day, hour, minute, longitude, utcOffset) {
  const dayOfYear = getDayOfYear(year, month, day);
  const B = (2 * Math.PI * (dayOfYear - 81)) / 364;
  const eot = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
  const localStandardMeridian = 15 * utcOffset;
  const longitudeCorrection = 4 * (longitude - localStandardMeridian);
  const correctionMinutes = eot + longitudeCorrection;

  const localDate = new Date(year, month - 1, day, hour, minute, 0);
  localDate.setMinutes(localDate.getMinutes() + correctionMinutes);
  return localDate;
}

function getDayOfYear(year, month, day) {
  const start = new Date(year, 0, 0);
  const now = new Date(year, month - 1, day);
  const diff = now - start;
  return Math.floor(diff / 86400000);
}

function calcBazi(trueSolarDate) {
  const y = trueSolarDate.getFullYear();
  const m = trueSolarDate.getMonth() + 1;
  const d = trueSolarDate.getDate();
  const h = trueSolarDate.getHours();
  const min = trueSolarDate.getMinutes();

  const yearPillar = getYearPillar(y, m, d);
  const monthPillar = getMonthPillar(y, m, d, yearPillar.stemIndex);
  const dayPillar = getDayPillar(y, m, d);
  const hourPillar = getHourPillar(dayPillar.stemIndex, h, min);

  const pillars = {
    year: yearPillar,
    month: monthPillar,
    day: dayPillar,
    hour: hourPillar
  };

  const elementCount = countElements(pillars);
  const elementRatio = toElementRatio(elementCount);
  return { pillars, elementCount, elementRatio };
}

function getYearPillar(year, month, day) {
  let adjustedYear = year;
  const liChun = getJieQiDay(year, "立春");
  if (month < 2 || (month === 2 && day < liChun)) adjustedYear -= 1;

  const stemIndex = ((adjustedYear - 4) % 10 + 10) % 10;
  const branchIndex = ((adjustedYear - 4) % 12 + 12) % 12;
  return makePillar(stemIndex, branchIndex);
}

function getMonthPillar(year, month, day, yearStemIndex) {
  const monthBranchIndex = getSolarMonthBranch(year, month, day);
  const monthOrderFromYin = (monthBranchIndex - 2 + 12) % 12;
  const startStem = [2, 4, 6, 8, 0][Math.floor(yearStemIndex / 2)];
  const stemIndex = (startStem + monthOrderFromYin) % 10;
  return makePillar(stemIndex, monthBranchIndex);
}

function getSolarMonthBranch(year, month, day) {
  let branch = 1;
  for (let i = 0; i < MONTH_FLOW.length; i += 1) {
    const name = MONTH_FLOW[i];
    const bMonth = JIE_QI_MONTH[name];
    const bDay = getJieQiDay(year, name);
    if (month > bMonth || (month === bMonth && day >= bDay)) {
      branch = MONTH_BRANCH_FROM_JIEQI[name];
    }
  }
  return branch;
}

function getJieQiDay(year, jieQiName) {
  const rule = JIE_QI_C[jieQiName];
  const c = year >= 2001 ? rule.c21 : rule.c20;
  const y = year % 100;
  let day = Math.floor(y * 0.2422 + c) - Math.floor((y - 1) / 4);
  const fix = (JIE_QI_YEAR_CORRECTION[jieQiName] || {})[year] || 0;
  day += fix;
  return day;
}

function getDayPillar(year, month, day) {
  const jd = julianDay(year, month, day);
  const baseJd = julianDay(1984, 2, 2);
  const delta = jd - baseJd;
  const index60 = ((delta % 60) + 60) % 60;
  const stemIndex = index60 % 10;
  const branchIndex = index60 % 12;
  return makePillar(stemIndex, branchIndex);
}

function getHourPillar(dayStemIndex, hour, minute) {
  const hourDecimal = hour + minute / 60;
  const branchIndex = Math.floor((hourDecimal + 1) / 2) % 12;
  const stemIndex = (dayStemIndex * 2 + branchIndex) % 10;
  return makePillar(stemIndex, branchIndex);
}

function julianDay(year, month, day) {
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + B - 1524;
}

function makePillar(stemIndex, branchIndex) {
  return {
    stemIndex,
    branchIndex,
    stem: STEMS[stemIndex],
    branch: BRANCHES[branchIndex],
    text: `${STEMS[stemIndex]}${BRANCHES[branchIndex]}`,
    stemElement: STEM_ELEMENT[stemIndex],
    branchElement: BRANCH_MAIN_ELEMENT[branchIndex]
  };
}

function countElements(pillars) {
  const counter = { 木: 0, 火: 0, 土: 0, 金: 0, 水: 0 };
  Object.values(pillars).forEach((p) => {
    counter[p.stemElement] += 1;
    counter[p.branchElement] += 1;
  });
  return counter;
}

function toElementRatio(counts) {
  const total = Object.values(counts).reduce((sum, n) => sum + n, 0) || 1;
  const ratio = {};
  ELEMENTS.forEach((e) => {
    ratio[e] = Number(((counts[e] / total) * 100).toFixed(1));
  });
  return ratio;
}

function analyzeNameWuxing(fullName) {
  const chars = [...fullName].filter((ch) => /[\u4e00-\u9fffA-Za-z]/.test(ch));
  const details = chars.map((ch) => {
    const element = detectNameCharElement(ch);
    return { char: ch, element };
  });

  const counts = { 木: 0, 火: 0, 土: 0, 金: 0, 水: 0 };
  details.forEach((d) => {
    counts[d.element] += 1;
  });

  const ratio = toElementRatio(counts);
  const dominant = [...ELEMENTS].sort((a, b) => counts[b] - counts[a])[0];
  const weak = [...ELEMENTS].sort((a, b) => counts[a] - counts[b])[0];

  return {
    chars,
    details,
    counts,
    ratio,
    dominant,
    weak,
    summary: `姓名五行偏${dominant}，相对偏弱为${weak}。`
  };
}

function detectNameCharElement(ch) {
  if (NAME_CHAR_ELEMENT_MAP[ch]) return NAME_CHAR_ELEMENT_MAP[ch];
  const code = ch.codePointAt(0);
  return ELEMENTS[code % 5];
}

function analyzeLifeElements(bazi, nameAnalysis) {
  const dayMaster = bazi.pillars.day.stemElement;
  const counts = bazi.elementCount;
  const ratio = bazi.elementRatio;
  const dominant = [...ELEMENTS].sort((a, b) => counts[b] - counts[a])[0];
  const weak = [...ELEMENTS].sort((a, b) => counts[a] - counts[b])[0];

  const lifeText = buildLifeElementText(dayMaster, dominant, weak, ratio);
  const personalityText = buildPersonalityText(dayMaster, dominant, weak);
  const nameLinkText = buildNameLinkText(nameAnalysis, weak, dominant);

  return {
    dayMaster,
    dominant,
    weak,
    ratio,
    lifeText,
    personalityText,
    nameLinkText
  };
}

function buildLifeElementText(dayMaster, dominant, weak, ratio) {
  return `你的日主为${dayMaster}，命盘五行比例为 木${ratio["木"]}% 火${ratio["火"]}% 土${ratio["土"]}% 金${ratio["金"]}% 水${ratio["水"]}%。整体呈现${dominant}偏旺、${weak}偏弱的结构。命局偏旺时适合主动突破，命局偏弱位则需要靠节奏管理和环境补益来平衡。`;
}

function buildPersonalityText(dayMaster, dominant, weak) {
  const dayMasterTraits = {
    木: "重成长、讲原则，行动有方向感",
    火: "表达力强、感染力高，重视被看见",
    土: "稳健务实、抗压能力强，注重安全边界",
    金: "逻辑清晰、执行果断，标准意识高",
    水: "感受力和洞察力强，擅长应变"
  };
  return `性格底色：${dayMasterTraits[dayMaster]}。当前${dominant}旺会放大你的优势，但也容易过度用力；${weak}弱时容易在该维度出现后劲不足，建议以“先定节奏、再拉强度”的方式做长期规划。`;
}

function buildNameLinkText(nameAnalysis, weak, dominant) {
  if (!nameAnalysis.chars.length) {
    return "姓名未识别到可分析字符，姓名五行联动分析已跳过。";
  }
  const strengthen = nameAnalysis.counts[weak] > 0 ? "有直接补益" : "补益有限";
  const overBoost = nameAnalysis.counts[dominant] > 0 ? "会继续增强命局强势项" : "不会额外放大命局强势项";
  return `姓名五行与命局联动：对命局偏弱的${weak}${strengthen}，并且${overBoost}。用于品牌名/社媒名时，可优先保留补弱元素。`;
}

function calcAnnualFortune(bazi, targetYear, gender, lifeAnalysis) {
  const yearPillar = getYearPillar(targetYear, 6, 1);
  const dayMaster = bazi.pillars.day.stemElement;
  const relation = getElementRelation(dayMaster, yearPillar.stemElement);
  const strengthHint = bazi.elementCount[dayMaster] >= 2 ? "偏强" : "偏弱";

  const career = buildCareerText(relation, strengthHint, lifeAnalysis.dominant, lifeAnalysis.weak);
  const love = buildLoveText(relation, gender, lifeAnalysis.dominant);
  const health = buildHealthText(lifeAnalysis.weak, lifeAnalysis.dominant);
  const wealth = buildWealthText(relation, lifeAnalysis.weak);
  const actions = buildActionSuggestions(dayMaster, lifeAnalysis.weak);
  const cautions = buildCautions(lifeAnalysis.dominant, lifeAnalysis.weak);
  const yearOverview = build2026Overview(targetYear);
  const personalBridge = buildPersonalYearBridge(relation, yearPillar, lifeAnalysis);

  return {
    targetYear,
    annualPillar: yearPillar,
    dayMaster,
    relation,
    strengthHint,
    yearOverview,
    personalBridge,
    career,
    love,
    health,
    wealth,
    actions,
    cautions
  };
}

function build2026Overview(targetYear) {
  if (targetYear === 2026) {
    return "2026 年为丙午年，火势明显增强，社会层面通常表现为节奏更快、曝光更强、竞争更直接。整体大运关键词是“提速、显化、两极分化”：主动者更容易拿到舞台，被动者会感到压力上升。";
  }
  const yPillar = getYearPillar(targetYear, 6, 1);
  return `${targetYear} 年为${yPillar.text}年，整体趋势会围绕${yPillar.stemElement}元素展开，主旋律是把优势变成可兑现结果。`;
}

function buildPersonalYearBridge(relation, yearPillar, lifeAnalysis) {
  return `你的个人流年与大势的连接点是“${relation}”（你的日主对流年天干${yearPillar.stem}）。这意味着你在${lifeAnalysis.dominant}相关能力上更容易放大成果，但也要用${lifeAnalysis.weak}维度做稳定器，避免高开低走。`;
}

function getElementRelation(selfElement, otherElement) {
  const generates = { 木: "火", 火: "土", 土: "金", 金: "水", 水: "木" };
  const controls = { 木: "土", 土: "水", 水: "火", 火: "金", 金: "木" };
  if (selfElement === otherElement) return "比和";
  if (generates[selfElement] === otherElement) return "泄秀";
  if (generates[otherElement] === selfElement) return "生扶";
  if (controls[selfElement] === otherElement) return "克财";
  return "受制";
}

function buildCareerText(relation, strengthHint, strongest, weakest) {
  const base = {
    比和: "今年事业更看重团队协同与资源整合，适合横向拓展人脉和项目。",
    泄秀: "今年适合输出能力与品牌曝光，做作品、做内容、做方法论会更容易出圈。",
    生扶: "今年贵人运较明显，适合争取内部提拔、关键客户背书与跨部门支持。",
    克财: "今年冲业绩能力强，但压力也更大，适合结果导向型岗位与硬目标冲刺。",
    受制: "今年容易遇到流程和规则阻力，建议先稳住基本盘，再分阶段突破。"
  }[relation];
  return `${base} 你的命局日主${strengthHint}，当前五行以${strongest}偏旺、${weakest}偏弱，做决策时要避免“单点猛冲”，改为“主线+备份方案”会更稳。`;
}

function buildLoveText(relation, gender, strongest) {
  let genderHint = "";
  if (gender === "male") genderHint = "男性视角下，今年更适合用行动感建立安全感。";
  if (gender === "female") genderHint = "女性视角下，今年更适合明确边界与节奏，避免情绪内耗。";
  const relationHint = relation === "比和"
    ? "感情关系重在价值观一致。"
    : relation === "生扶"
      ? "容易遇到愿意支持你成长的人。"
      : "亲密关系要多做沟通确认，别用猜测代替表达。";
  return `${relationHint}${genderHint} 命局${strongest}气较重时，表达方式会更直接，记得保留倾听空间。`;
}

function buildHealthText(weakest, strongest) {
  const map = { 木: "肝胆与情绪调节", 火: "心血管与睡眠", 土: "脾胃与代谢", 金: "呼吸系统与皮肤", 水: "肾气与泌尿系统" };
  return `今年重点关注${map[weakest]}，这是你的相对薄弱位；${map[strongest]}属于易过载位，避免长期熬夜、暴饮暴食或过度训练。建议至少每季度做一次体检指标复盘。`;
}

function buildWealthText(relation, weakest) {
  const text = relation === "克财"
    ? "财务机会来自高压项目与高责任岗位，但风险和回撤也更明显。"
    : relation === "生扶"
      ? "财务增长偏稳，适合通过主业能力升级带动收入上行。"
      : "财务节奏以“稳中求进”为主，先管住现金流再追求收益率。";
  return `${text} ${weakest}偏弱提示你今年要特别重视预算纪律和风险分散，不建议重仓单一资产。`;
}

function buildActionSuggestions(dayMaster, weakest) {
  const luckyDirection = { 木: "东、东南", 火: "南", 土: "中宫、东北", 金: "西、西北", 水: "北" }[dayMaster];
  const balancingColor = { 木: "青绿系", 火: "暖红系", 土: "米黄棕系", 金: "白灰金属系", 水: "蓝黑系" }[weakest];
  return [
    "作息转运：连续 90 天保持固定入睡时间（建议 23:30 前），优先修复精力场。",
    `环境转运：办公位或书桌朝向可优先考虑${luckyDirection}方位。`,
    "行为转运：每周做一次“复盘清单”，聚焦 3 件可量化推进事项。",
    `五行补益：日常穿搭、配饰或空间可增加${balancingColor}元素。`
  ];
}

function buildCautions(strongest, weakest) {
  return [
    `${strongest}旺导致的典型风险是“过度推进”，重要决策请设置冷静期（至少 24 小时）。`,
    `${weakest}弱会体现在执行后劲不足，避免并行过多任务，建议一次聚焦一个主目标。`,
    "涉及职业跳槽、合伙、婚恋承诺等关键事项，建议先做现实条件审查，再看运势择时。"
  ];
}

function runEngineValidation() {
  const checks = [];

  checks.push({
    name: "立春换年校验",
    passed: getYearPillar(2026, 2, 3).text === "乙巳" && getYearPillar(2026, 2, 6).text === "丙午"
  });

  checks.push({
    name: "节气定月校验",
    passed: getSolarMonthBranch(2026, 2, 6) === 2 && getSolarMonthBranch(2026, 1, 7) === 1
  });

  const d1 = getDayPillar(2026, 3, 1);
  const d2 = getDayPillar(2026, 3, 2);
  checks.push({
    name: "日柱连续性校验",
    passed: (d2.stemIndex + 10 - d1.stemIndex) % 10 === 1 && (d2.branchIndex + 12 - d1.branchIndex) % 12 === 1
  });

  checks.push({
    name: "时柱分支边界校验",
    passed: getHourPillar(0, 23, 30).branch === "子" && getHourPillar(0, 1, 30).branch === "丑"
  });

  checks.push({
    name: "六十甲子唯一性校验",
    passed: verifySexagenaryUniqueness(1984, 2, 2)
  });

  const failed = checks.filter((c) => !c.passed).map((c) => c.name);
  return {
    passed: failed.length === 0,
    checks,
    failed,
    text: failed.length === 0
      ? "已通过 5 项引擎校验（立春换年、节气定月、日柱连续性、时柱边界、六十甲子唯一性）。"
      : `校验未全部通过：${failed.join("、")}`
  };
}

function verifySexagenaryUniqueness(baseYear, baseMonth, baseDay) {
  const seen = new Set();
  for (let i = 0; i < 60; i += 1) {
    const date = new Date(baseYear, baseMonth - 1, baseDay + i);
    const p = getDayPillar(date.getFullYear(), date.getMonth() + 1, date.getDate());
    seen.add(p.text);
  }
  return seen.size === 60;
}

function updateValidationBadge(validation) {
  validationBadge.classList.remove("ok", "fail");
  if (validation.passed) {
    validationBadge.classList.add("ok");
    validationBadge.textContent = "算法验证通过";
  } else {
    validationBadge.classList.add("fail");
    validationBadge.textContent = "算法验证异常";
  }
}

function renderReport(ctx) {
  const resultCard = document.getElementById("result-card");
  const resultContent = document.getElementById("result-content");
  const { fullName, birth, cityInfo, utcOffset, trueSolarDate, bazi, nameAnalysis, lifeAnalysis, annual, validation } = ctx;

  const ratioBars = ELEMENTS.map((e) => `${e}:${bazi.elementRatio[e]}%`).join(" | ");
  const nameParts = nameAnalysis.details.map((d) => `${d.char}-${d.element}`).join("，") || "无";

  resultContent.innerHTML = `
    <p><strong>姓名</strong>：${fullName}</p>
    <p><strong>出生信息</strong>：${birth.year}-${pad2(birth.month)}-${pad2(birth.day)} ${pad2(birth.hour)}:${pad2(birth.minute)}，${birth.country} ${birth.city}</p>
    <p><strong>自动时区</strong>：${cityInfo.tz}（${formatUtcOffset(utcOffset)}）</p>
    <p><strong>真太阳时</strong>：${formatDateTime(trueSolarDate)}</p>

    <div class="report-section">
      <h3>四柱八字</h3>
      <div class="pillars">
        <div>年柱：<strong>${bazi.pillars.year.text}</strong></div>
        <div>月柱：<strong>${bazi.pillars.month.text}</strong></div>
        <div>日柱：<strong>${bazi.pillars.day.text}</strong></div>
        <div>时柱：<strong>${bazi.pillars.hour.text}</strong></div>
      </div>
      <p>五行比例：${ratioBars}</p>
    </div>

    <div class="report-section">
      <h3>命局五行与性格分析</h3>
      <p>${lifeAnalysis.lifeText}</p>
      <p>${lifeAnalysis.personalityText}</p>
    </div>

    <div class="report-section">
      <h3>姓名五行分析</h3>
      <p>姓名拆解：${nameParts}</p>
      <p>${nameAnalysis.summary}</p>
      <p>${lifeAnalysis.nameLinkText}</p>
    </div>

    <div class="report-section">
      <h3>${annual.targetYear} 年整体运势（大势）</h3>
      <p>${annual.yearOverview}</p>
      <p>${annual.personalBridge}</p>
    </div>

    <div class="report-section">
      <h3>事业运</h3>
      <p>${annual.career}</p>
    </div>
    <div class="report-section">
      <h3>爱情运</h3>
      <p>${annual.love}</p>
    </div>
    <div class="report-section">
      <h3>健康运</h3>
      <p>${annual.health}</p>
    </div>
    <div class="report-section">
      <h3>财富运</h3>
      <p>${annual.wealth}</p>
    </div>

    <div class="report-section">
      <h3>转运操作建议</h3>
      <ol>${annual.actions.map((a) => `<li>${a}</li>`).join("")}</ol>
    </div>

    <div class="report-section">
      <h3>注意事项</h3>
      <ol>${annual.cautions.map((c) => `<li>${c}</li>`).join("")}</ol>
    </div>

    <div class="report-section">
      <h3>后台算法校验</h3>
      <p>${validation.text}</p>
    </div>

    <div class="report-section">
      <h3>算法说明</h3>
      <p>八字采用台湾常见子平法口径：立春换年、节气定月、真太阳时校正。姓名五行采用“常见字直映射 + 字符编码兜底”的工程分析法。</p>
    </div>
  `;

  latestReportText = buildPlainTextReport(ctx);
  resultCard.classList.remove("hidden");
}

function buildPlainTextReport(ctx) {
  const { fullName, birth, cityInfo, utcOffset, trueSolarDate, bazi, nameAnalysis, lifeAnalysis, annual, validation } = ctx;
  const lines = [];

  lines.push(`【${annual.targetYear} 年个人运势报告】`);
  lines.push("");
  lines.push(`姓名：${fullName}`);
  lines.push(`出生信息：${birth.year}-${pad2(birth.month)}-${pad2(birth.day)} ${pad2(birth.hour)}:${pad2(birth.minute)}，${birth.country} ${birth.city}`);
  lines.push(`自动时区：${cityInfo.tz}（${formatUtcOffset(utcOffset)}）`);
  lines.push(`真太阳时：${formatDateTime(trueSolarDate)}`);
  lines.push("");

  lines.push("四柱八字：");
  lines.push(`年柱 ${bazi.pillars.year.text} | 月柱 ${bazi.pillars.month.text} | 日柱 ${bazi.pillars.day.text} | 时柱 ${bazi.pillars.hour.text}`);
  lines.push(`五行比例：木 ${bazi.elementRatio["木"]}% / 火 ${bazi.elementRatio["火"]}% / 土 ${bazi.elementRatio["土"]}% / 金 ${bazi.elementRatio["金"]}% / 水 ${bazi.elementRatio["水"]}%`);
  lines.push("");

  lines.push("命局五行与性格分析：");
  lines.push(lifeAnalysis.lifeText);
  lines.push(lifeAnalysis.personalityText);
  lines.push("");

  lines.push("姓名五行分析：");
  lines.push(`姓名拆解：${nameAnalysis.details.map((d) => `${d.char}-${d.element}`).join("，") || "无"}`);
  lines.push(nameAnalysis.summary);
  lines.push(lifeAnalysis.nameLinkText);
  lines.push("");

  lines.push(`${annual.targetYear} 年整体运势（大势）：`);
  lines.push(annual.yearOverview);
  lines.push(annual.personalBridge);
  lines.push("");

  lines.push("事业运：");
  lines.push(annual.career);
  lines.push("");

  lines.push("爱情运：");
  lines.push(annual.love);
  lines.push("");

  lines.push("健康运：");
  lines.push(annual.health);
  lines.push("");

  lines.push("财富运：");
  lines.push(annual.wealth);
  lines.push("");

  lines.push("转运操作建议：");
  annual.actions.forEach((item, idx) => lines.push(`${idx + 1}. ${item}`));
  lines.push("");

  lines.push("注意事项：");
  annual.cautions.forEach((item, idx) => lines.push(`${idx + 1}. ${item}`));
  lines.push("");

  lines.push("后台算法校验：");
  lines.push(validation.text);
  lines.push("");

  lines.push("算法说明：八字采用台湾常见子平法口径（立春换年、节气定月、真太阳时）。");
  lines.push("免责声明：本报告用于参考，不替代医疗、法律、金融等专业意见。");

  return lines.join("\n");
}

async function generateAiEnhancedText(ctx, apiKey) {
  const prompt = [
    "请基于以下八字运势数据，输出专业但口语化的中文报告。",
    "要求：纯文本、逻辑清晰、不要使用 markdown 符号。",
    "必须包含：2026 大势解读、个人命盘如何承接大势、事业/爱情/健康/财富重点、三条最重要行动建议。",
    `数据：${buildPlainTextReport(ctx)}`
  ].join("\n");

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: "你是一位资深易经与八字顾问，强调解释链条和可执行建议，避免玄学堆砌。"
        },
        {
          role: "user",
          content: prompt
        }
      ]
    })
  });

  if (!response.ok) {
    const msg = await response.text();
    throw new Error(`HTTP ${response.status} ${msg}`);
  }

  const data = await response.json();
  const text = (data.output_text || "").trim();
  if (!text) throw new Error("模型未返回文本内容");
  return text;
}

function formatDateTime(date) {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())} ${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
}

function pad2(v) {
  return String(v).padStart(2, "0");
}
