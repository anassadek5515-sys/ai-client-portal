import { Router, type IRouter } from "express";
import healthRouter from "./health";

const router: IRouter = Router();

router.use(healthRouter);

// 🚀 مسار التخطي التجريبي لتفعيل الحساب فوراً من الموبايل
router.get("/demo-bypass", (req, res) => {
  res.send(`
    <script>
      localStorage.setItem('hasPaid', 'true');
      localStorage.setItem('userStatus', 'active_demo');
      localStorage.setItem('onboarding_completed', 'true');
      window.location.href = '/dashboard';
    </script>
    <h2>جاري تحويلك للحساب التجريبي... 🚀</h2>
  `);
});

export default router;
