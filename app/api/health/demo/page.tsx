"use client";
import { useEffect } from "react";

export default function DemoBypass() {
  useEffect(() => {
    localStorage.setItem("hasPaid", "true");
    localStorage.setItem("userStatus", "active_demo");
    localStorage.setItem("onboarding_completed", "true");
    window.location.href = "/dashboard";
  }, []);

  return <h2 style={{ textAlign: "center", marginTop: "50px" }}>جاري التفعيل والدخول للوحة التحكم... 🚀</h2>;
}
