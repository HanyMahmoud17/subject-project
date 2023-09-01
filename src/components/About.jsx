import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import logo from "../assets/images/subjectLogo.png";

import aboutStyles from '../assets/css/about.module.css';

const About = () => {
    return (
        <>
        <div className={aboutStyles.container}>

        
            <div className={aboutStyles.loadingContainer}>
                <img
                    src={logo}
                    alt="Logo"
                    className={aboutStyles.logo}
                />
            
            <div>
                <h1 style={{ color: '#7d57f3', paddingBottom: '3px' }}>
                    منصة سبجكت الرقمية
                </h1>
                <p style={{ color: '#000000' }}>
                    هي منصة مختصة بجمع الملفات الجامعية وتهدف إلى تسهيل وصول الباحث إلى النتائج بسرعة وسهولة ودقة، وتزويده بالملفات لتحميلها او طباعتها، وهي حالياً في طور التجربة والتطوير والتحديث.
                </p>
<br />
                <p>
                <h1 style={{ color: '#7d57f3' }}>
                تتميز المنصة :
                </h1>
                    <p style={{ color: '#000000', paddingTop: '3px' }}>
                        - البحث العام في مجموعة الملفات الجامعية وملحقاتها، مع الفرز وتقديم النتيجة بشكل دقيق.
                        <br />
                        - الانتقال السريع إلى المقرر الدراسي.
                        <br />
                        - المشاركة للملفات الجامعية، والوصول إلى مكانها بروابط مختصرة.
                        <br />
                        - سهولة وسرعة البحث والإنتقال.
                        <br />
                        - تقدم جميع المميزات مجانًا.
                    </p>
      <br />
      <h1 style={{ color: '#7d57f3' }}>

                        المصادر التي يعتمد عليها الموقع :
      </h1>
                    <p style={{ color: '#000000', paddingTop: '3px' }}>
                        يعتمد الموقع على جمع الملفات من المصادر الأصلية لها أو مايتم تداوله ونشره.
                    </p>
            <br />
            <h1 style={{ color: '#7d57f3' }}>

                        حقوق المحتوى:
            </h1>
                    <p style={{ color: '#000000', paddingTop: '3px', width: '92%'}}>
                        لا تملك المنصة حقوق للملفات المنشورة المتاحة للجميع، وتعمل على تسهيل الوصول إليها وتمكين الباحث للاطلاع عليها، ونتحرى الدقة في إدخال المحتوى، ونخلي المسؤولية عن الأخطاء الواردة في إدخال المحتوى، ونرجو إبلاغنا فور وجود أي أخطاء أو ملاحظات ، كما أن أي استخدام للموقع من قبل قاصده بقصد إلحاق الضرر به، يعرض فاعله للمسائلة القانونية.
                    </p>
                  <br />
                  <h1 style={{ color: '#7d57f3' }}>

                        ارتقاء العمل:
                  </h1>
                    <p style={{ color: '#000000', paddingTop: '3px' }}>
                        تتطلع المنصة إلى مشاركة المهتمين في إرسال الملفات مع رموز مقرراتها المتاحة للنشر، وكل ما يخدم الطلبة والمتطلعين إليه.
                    </p>
                </p>
            <br />
            </div>
        
            </div>
                </div>
        </>
    );
};

export default About;