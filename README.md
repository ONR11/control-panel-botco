# ONR Developer SAMP

🎮 **موقع تعريفي احترافي لفريق ONR Developer المتخصص في تطوير سيرفرات SA-MP و OpenMP العراقية**

## ✨ الميزات

✅ تصميم عصري وجذاب
✅ لهجة عراقية أصيلة
✅ متجاوب على جميع الأجهزة
✅ أنيميشنات سلسة وسريعة
✅ جاهز للإنتاج

## 🚀 البدء السريع

### المتطلبات
- Node.js 18+
- npm أو yarn

### التثبيت

```bash
# استنساخ المشروع
git clone https://github.com/ONR11/onrSAMP.git
cd onrSAMP

# تثبيت الحزم
npm install

# تشغيل الخادم
npm run dev

# افتح المتصفح
http://localhost:3000
```

## 📁 هيكل المشروع

```
onrSAMP/
├── src/
│   └── app/
│       ├── page.tsx          # الصفحة الرئيسية
│       ├── layout.tsx        # التخطيط الأساسي
│       └── globals.css       # الأنماط العامة
├── public/                   # الملفات الثابتة
├── package.json             # المتطلبات
├── tailwind.config.ts       # إعدادات Tailwind
└── tsconfig.json            # إعدادات TypeScript
```

## 🎨 التخصيص

### تغيير الألوان
عدّل الألوان في `src/app/globals.css`:

```css
:root {
  --primary: #8B5CF6;    /* اللون الأساسي */
  --secondary: #1E293B;  /* اللون الثانوي */
}
```

### تعديل المحتوى
جميع النصوص موجودة في `src/app/page.tsx` - يمكنك تعديلها مباشرة

## 🔧 البناء والنشر

```bash
# بناء الإصدار الإنتاجي
npm run build

# تشغيل الإصدار الإنتاجي
npm start
```

## 🌐 النشر على Vercel

```bash
# تثبيت Vercel CLI
npm install -g vercel

# نشر المشروع
vercel
```

## 📞 التواصل

- Discord: https://discord.gg/onr
- Telegram: https://t.me/onrdeveloper
- Twitter: https://twitter.com/onrdeveloper

## 📄 الترخيص

MIT License

---

**تم تطويره بواسطة فريق ONR Developer** 🚀
