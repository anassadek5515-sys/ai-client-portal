/**
 * نظام مزامنة أرباح البلوكشين للوحة التحكم (Boss Panel & Client Portal)
 * يقوم بالتحقق من الاتصال بالـ API وتحديث العدادات والأرباح لايف.
 */

const API_ENDPOINT = "/api/wallet-status";

async function syncRealWalletEarnings() {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();

    if (data.success) {
      // 1. تحديث حالة التحقق لتصبح متصلة وحقيقية
      const statusElement = document.getElementById("verification-status");
      if (statusElement) {
        statusElement.innerText = "التحقق من الدفع الحقيقي متصل 🟢 (On-Chain Active)";
        statusElement.style.color = "#00ff88";
      }

      // 2. تحديث إجمالي الأرباح بالدولار
      const revenueElement = document.getElementById("total-revenue");
      if (revenueElement) {
        revenueElement.innerText = `$${data.totalRealUSD.toLocaleString()}`;
      }

      // 3. تحديث عدد المبيعات والمعاملات الناجحة
      const txCountElement = document.getElementById("total-sales");
      if (txCountElement) {
        txCountElement.innerText = data.totalTransactionsCount;
      }

      console.log("✅ تم تحديث بيانات لوحة التحكم من البلوكشين بنجاح:", data);
    }
  } catch (error) {
    console.error("❌ تعذر الاتصال بـ Wallet Verification API:", error);
    
    // إظهار حالة غير متصل مؤقتاً في حال وجود مشكلة في الاتصال
    const statusElement = document.getElementById("verification-status");
    if (statusElement) {
      statusElement.innerText = "التحقق من الدفع الحقيقي غير متصل 🔴";
      statusElement.style.color = "#ff4444";
    }
  }
}

// التشغيل التلقائي عند تحميل الصفحة وتحديثها دورياً كل 15 ثانية
document.addEventListener("DOMContentLoaded", () => {
  syncRealWalletEarnings();
  setInterval(syncRealWalletEarnings, 15000);
});
