// الهدف: حساب المتوسط الحسابي والتباين والانحراف المعياري
// بيانات ساعات انتظار السفن
const waitingHours = [8, 10, 12, 10, 15];

// المرحلة الأولى: التعرف على البيانات
console.log("تمثل البيانات عدد ساعات انتظار السفن قبل بدء التفريغ.");
console.log(
  "هل جميع السفن انتظرت المدة نفسها؟",
  new Set(waitingHours).size === 1 ? "نعم" : "لا"
);

// المرحلة الثانية: حساب المتوسط الحسابي
const sum = waitingHours.reduce((a, b) => a + b, 0);
const n = waitingHours.length;
const mean = sum / n;

console.log("مجموع ساعات الانتظار =", sum); // 55
console.log("عدد السفن =", n); // 5
console.log("المتوسط الحسابي =", mean); // 11

// المرحلة الثالثة: حساب التباين
const table = waitingHours.map(x => {
  const diff = x - mean;
  const squared = diff ** 2;

  return {
    x,
    "x - x̅": diff,
    "(x - x̅)²": squared
  };
});

console.table(table);

const squaredSum = table.reduce((sum, row) => sum + row["(x - x̅)²"], 0);
const variance = squaredSum / n;

console.log("مجموع القيم المربعة =", squaredSum); // 26
console.log("التباين =", variance); // 5.2

// المرحلة الرابعة: حساب الانحراف المعياري
const standardDeviation = Math.sqrt(variance);

console.log(
  "الانحراف المعياري =",
  standardDeviation.toFixed(2)
); // 2.28

// المرحلة الخامسة: تفسير النتائج
console.log("أوقات الانتظار متقاربة نسبيًا.");
console.log("التباين المنخفض نسبيًا يدل على أن القيم ليست بعيدة عن المتوسط.");
console.log(
  "يمكن لإدارة ميناء العقبة استخدام هذه النتائج لتقييم كفاءة عمليات التفريغ وتقليل فترات الانتظار."
);

// التحدي الإضافي
const newData = [...waitingHours, 25];

const newSum = newData.reduce((a, b) => a + b, 0);
const newMean = newSum / newData.length;

const newVariance =
  newData.reduce((sum, x) => sum + (x - newMean) ** 2, 0) /
  newData.length;

const newStdDev = Math.sqrt(newVariance);

console.log("\n--- بعد إضافة السفينة الجديدة ---");
console.log("المتوسط الحسابي =", newMean.toFixed(2)); // 13.33
console.log("التباين =", newVariance.toFixed(2)); // 33.56
console.log("الانحراف المعياري =", newStdDev.toFixed(2)); // 5.79

console.log(
  "أدت القيمة المرتفعة (25 ساعة) إلى زيادة المتوسط والتباين والانحراف المعياري بشكل واضح، مما يدل على زيادة تشتت البيانات."
);