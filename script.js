// Modal functionality
function renderModal(data, id) {
  const container = document.getElementById(`modal-${id}`);
  const rtl = document.documentElement.dir === 'rtl';

  // Custom rendering for KKIA modal using provided content
  if (id === 'kkia') {
    container.innerHTML = `
    <!-- KKIA Modal -->
    <div class="fixed inset-0 z-[200] flex flex-col modal-content">
      <!-- Background layer -->
      <img src="imgs/King-Khaled-International-Airport.jpg" alt="KKIA Background" class="absolute inset-0 w-full h-full object-cover">
      <div class="absolute inset-0 bg-slate-900/85"></div>
      
      <!-- Modal Header -->
      <div class="relative flex justify-between items-center p-4 border-b border-slate-700 bg-slate-800/60 z-[110]">
        <div class="flex items-center gap-3">
          <img src="imgs/brands/riy.svg" alt="Riyadh Airports" class="h-6 w-auto opacity-80">
          <h2 class="text-xl font-bold text-[#1eaae7] english">King Khaled International Airport - ALTANFEETHI Terminal 5 Iconic Terminal Enabling Work Package</h2>
          <h2 class="text-xl font-bold text-[#1eaae7] arabic">مطار الملك خالد الدولي - التنفيذي المحطة 5 حزمة أعمال التمكين للمحطة الأيقونية</h2>
        </div>
        <button onclick="closeModal('kkia')" class="text-white text-2xl hover:text-[#1eaae7]">&times;</button>
      </div>

      <!-- Modal Body -->
      <div class="relative flex-1 overflow-y-auto">
        <div class="px-8 sm:px-10 lg:px-14 py-8">
          <!-- Top Section: Two Column Layout -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            <!-- Left column -->
            <div class="lg:col-span-7 space-y-6">
              <!-- English Version -->
              <div class="english">
                <h3 class="text-[#1eaae7] text-2xl font-bold">Work Covered</h3>
                <ol class="list-decimal list-inside text-slate-200/95 space-y-2 text-lg">
                  <li>Detailed design and permits documentation.</li>
                  <li>Permits and airside insurance.</li>
                  <li>As-Built and Operations Manual documentation.</li>
                </ol>
                <!-- Scope chips -->
                <div class="grid sm:grid-cols-2 gap-6">
                  <div class="flex items-center gap-3 bg-slate-800/40 border border-slate-600/60 px-5 py-4">
                    <i class="ri-building-2-line text-[#1eaae7] text-xl"></i>
                    <span class="text-white">Infrastructure Civil Works</span>
                  </div>
                  <div class="flex items-center gap-3 bg-slate-800/40 border border-slate-600/60 px-5 py-4">
                    <i class="ri-camera-lens-line text-[#1eaae7] text-xl"></i>
                    <span class="text-white">Surveillance System</span>
                  </div>
                  <div class="flex items-center gap-3 bg-slate-800/40 border border-slate-600/60 px-5 py-4">
                    <i class="ri-global-line text-[#1eaae7] text-xl"></i>
                    <span class="text-white">ICT</span>
                  </div>
                  <div class="flex items-center gap-3 bg-slate-800/40 border border-slate-600/60 px-5 py-4">
                    <i class="ri-flashlight-line text-[#1eaae7] text-xl"></i>
                    <span class="text-white">Electrical & Flood Lighting</span>
                  </div>
                  <div class="sm:col-span-2 flex items-center gap-3 bg-slate-800/40 border border-slate-600/60 px-5 py-4">
                    <i class="ri-shield-check-line text-[#1eaae7] text-xl"></i>
                    <span class="text-white">Physical Security: supply, install, test and commission</span>
                  </div>
                </div>
              </div>
              
              <!-- Arabic Version -->
              <div class="arabic">
                <h3 class="text-[#1eaae7] text-2xl font-bold">الأعمال المغطاة</h3>
                <ol class="list-decimal list-inside text-slate-200/95 space-y-2 text-lg">
                  <li>إعداد التصميم التفصيلي ووثائق التصاريح.</li>
                  <li>التصاريح وتأمين المنطقة الجوية.</li>
                  <li>وثائق كما تم البناء ودليل التشغيل.</li>
                </ol>
                <!-- Scope chips -->
                <div class="grid sm:grid-cols-2 gap-6">
                  <div class="flex items-center gap-3 bg-slate-800/40 border border-slate-600/60 px-5 py-4">
                    <i class="ri-building-2-line text-[#1eaae7] text-xl"></i>
                    <span class="text-white">أعمال البنية التحتية المدنية</span>
                  </div>
                  <div class="flex items-center gap-3 bg-slate-800/40 border border-slate-600/60 px-5 py-4">
                    <i class="ri-camera-lens-line text-[#1eaae7] text-xl"></i>
                    <span class="text-white">نظام المراقبة</span>
                  </div>
                  <div class="flex items-center gap-3 bg-slate-800/40 border border-slate-600/60 px-5 py-4">
                    <i class="ri-global-line text-[#1eaae7] text-xl"></i>
                    <span class="text-white">تقنية المعلومات والاتصالات</span>
                  </div>
                  <div class="flex items-center gap-3 bg-slate-800/40 border border-slate-600/60 px-5 py-4">
                    <i class="ri-flashlight-line text-[#1eaae7] text-xl"></i>
                    <span class="text-white">الكهرباء والإضاءة الكاشفة</span>
                  </div>
                  <div class="sm:col-span-2 flex items-center gap-3 bg-slate-800/40 border border-slate-600/60 px-5 py-4">
                    <i class="ri-shield-check-line text-[#1eaae7] text-xl"></i>
                    <span class="text-white">الأمن المادي: التوريد والتركيب والاختبار والتشغيل</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Right column -->
            <div class="lg:col-span-5 space-y-6">
              <!-- Metrics -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="bg-slate-800/50 border border-slate-600/60 p-6">
                  <div class="text-3xl md:text-4xl font-extrabold text-white">4M SAR</div>
                  <div class="text-slate-300 english">Project Value</div>
                  <div class="text-slate-300 arabic">قيمة المشروع</div>
                </div>
                <div class="bg-slate-800/50 border border-slate-600/60 p-6">
                  <div class="text-3xl md:text-4xl font-extrabold text-white">1,040</div>
                  <div class="text-slate-300 english">Man-days</div>
                  <div class="text-slate-300 arabic">أيام العمل</div>
                </div>
              </div>
              <!-- Systems -->
              <div class="bg-slate-800/50 border border-slate-600/60 p-6">
                <h4 class="text-[#1eaae7] font-semibold mb-3 english">Systems</h4>
                <h4 class="text-[#1eaae7] font-semibold mb-3 arabic">الأنظمة</h4>
                <div class="english">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-slate-200">
                    <ul class="list-disc list-inside space-y-2">
                      <li>2,000 m Cabling</li>
                      <li>50 Gates</li>
                      <li>50 Cameras</li>
                      <li>40 Lighting Fixtures</li>
                    </ul>
                    <ul class="list-disc list-inside space-y-2">
                      <li>2,000 m Fence</li>
                      <li>Access Control</li>
                      <li>Perimeter Security</li>
                      <li>Surveillance & ICT</li>
                    </ul>
                  </div>
                </div>
                <div class="arabic">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-slate-200">
                    <ul class="list-disc list-inside space-y-2">
                      <li>2,000 متر كابلات</li>
                      <li>50 بوابة</li>
                      <li>50 كاميرا</li>
                      <li>40 وحدة إضاءة</li>
                    </ul>
                    <ul class="list-disc list-inside space-y-2">
                      <li>2,000 متر سياج</li>
                      <li>التحكم في الوصول</li>
                      <li>أمن المحيط</li>
                      <li>المراقبة وتقنية المعلومات</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Full Width Sections -->
          <div class="space-y-6">
            <!-- Main Contractor / End User / Project Location - Three Column Layout -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-slate-800/50 border border-slate-600/60 p-6 flex flex-col items-center text-center gap-4">
                <h4 class="text-[#1eaae7] font-semibold text-lg english">Main Contractor</h4>
                <h4 class="text-[#1eaae7] font-semibold text-lg arabic">المقاول الرئيسي</h4>
                <img src="imgs/cacc.jpeg" alt="CACC - Main Contractor" class="h-20 w-auto object-contain bg-white/5 p-3 rounded">
              </div>
              <div class="bg-slate-800/50 border border-slate-600/60 p-6 flex flex-col items-center text-center gap-4">
                <h4 class="text-[#1eaae7] font-semibold text-lg english">End User</h4>
                <h4 class="text-[#1eaae7] font-semibold text-lg arabic">المستخدم النهائي</h4>
                <img src="imgs/attanfezy.png" alt="ALTANFEETHI - End User" class="h-20 w-auto object-contain bg-white/5 p-3 rounded">
              </div>
                  <!-- Project Partners -->
              <div class="bg-slate-800/50 border border-slate-600/60 p-6 flex flex-col items-center text-center gap-4">
                <h4 class="text-[#1eaae7] font-semibold text-lg english">Project Partners</h4>
                <h4 class="text-[#1eaae7] font-semibold text-lg arabic">شركاء المشروع</h4>
                <div class="flex items-center justify-center gap-6 flex-wrap">
                  <img src="imgs/brands/axis.png" alt="AXIS" class="h-10 w-auto object-contain bg-white/5 p-2 rounded">
                  <img src="imgs/brands/MOXA.jpg" alt="MOXA" class="h-10 w-auto object-contain bg-white/5 p-2 rounded">
                  <img src="imgs/brands/comm.png" alt="CommScope" class="h-10 w-auto object-contain bg-white/5 p-2 rounded">
                </div>
              </div>
              <div class="bg-slate-800/50 border border-slate-600/60 p-6 flex flex-col items-center text-center gap-4 md:col-span-3">
                <h4 class="text-[#1eaae7] font-semibold text-lg english">Project Location</h4>
                <h4 class="text-[#1eaae7] font-semibold text-lg arabic">موقع المشروع</h4>
                <img src="imgs/Picture1.png" alt="ALTANFEETHI Riyadh T5 – Project Location" class="w-full h-[25rem] object-contain rounded-sm bg-white/5 p-2">
              </div>
          
            </div>
          </div>
        </div>
      </div>
    </div>`;
    return; // Do not continue to default rendering
  }

  if (id === 'privacy' || id === 'terms') {
    // Special rendering for privacy policy - full width without sidebar
    container.innerHTML = `
    <div class="fixed inset-0 bg-slate-900 z-50 flex flex-col modal-content">
      <div class="flex justify-between items-center p-6 border-b border-slate-700 bg-slate-800/50">
        <h2 class="text-2xl font-bold text-[#1eaae7]">${typeof data.title === 'string' ? data.title : (rtl ? data.title.ar : data.title.en)}</h2>
        <button onclick="closeModal('${id}')" class="text-white text-3xl hover:text-[#1eaae7]">&times;</button>
      </div>
      <div class="flex-1 overflow-y-auto p-6">
        ${(() => { const tab = Object.values(data.tabs)[0]; return (typeof tab.content === 'string') ? tab.content : (rtl ? tab.content.ar : tab.content.en); })()}
      </div>
    </div>
  `;
  } else {
    // Normal rendering with tabs sidebar for other modals
    container.innerHTML = `
    <div class="fixed inset-0 bg-slate-900 z-50 flex flex-col modal-content">
      <div class="flex justify-between items-center p-6 border-b border-slate-700 bg-slate-800/50">
        <h2 class="text-2xl font-bold text-[#1eaae7]">${typeof data.title === 'string' ? data.title : (rtl ? data.title.ar : data.title.en)}</h2>
        <button onclick="closeModal('${id}')" class="text-white text-3xl hover:text-[#1eaae7]">&times;</button>
      </div>
      <div class="flex flex-1 overflow-hidden">
        <div class="w-60 bg-slate-800 border-r border-slate-700 p-4 space-y-4">
          ${Object.keys(data.tabs).map((key, i) =>
      `<button onclick="switchTab('${id}', '${key}')" id="${id}-tab-btn-${key}" class="block w-full ${document.documentElement.dir === 'rtl' ? 'text-right' : 'text-left'} px-3 py-2 rounded-md ${i === 0 ? 'bg-[#1eaae7] text-white' : 'text-slate-300 hover:bg-slate-700'}">${(typeof data.tabs[key].label === 'string') ? data.tabs[key].label : ((document.documentElement.dir === 'rtl') ? data.tabs[key].label.ar : data.tabs[key].label.en)}</button>`
    ).join('')}
        </div>
        <div class="flex-1 p-6 overflow-y-auto">
          ${Object.keys(data.tabs).map((key, i) =>
      `<div id="${id}-tab-content-${key}" class="${i === 0 ? '' : 'hidden'}">${(typeof data.tabs[key].content === 'string') ? data.tabs[key].content : ((document.documentElement.dir === 'rtl') ? data.tabs[key].content.ar : data.tabs[key].content.en)}</div>`
    ).join('')}
        </div>
      </div>
    </div>
  `;
  }
}
f
unction openModal(id) {
  const modals = {
    kkia: {
      title: { en: 'KKIA Concourse Hall – Project Dashboard', ar: 'قاعة صالات مطار الملك خالد الدولي – لوحة المشروع' },
      tabs: {
        client: {
          label: { en: 'Client Info', ar: 'معلومات العميل' },
          content: {
            en: `<h3 class="text-xl font-semibold mb-2">Client: King Khalid International Airport</h3>
        <p class="text-slate-400">Expansion and infrastructure deployment in Riyadh airport's new concourse hall. Structured cabling, BMS, ACS, FAS.</p>`,
            ar: `<h3 class=\"text-xl font-semibold mb-2\">العميل: مطار الملك خالد الدولي</h3>
        <p class=\"text-slate-400\">توسعة ونشر البنية التحتية في قاعة الكونكورس الجديدة بمطار الرياض. تمديدات كابلات منظمة، نظام إدارة المباني BMS، نظام التحكم في الدخول ACS، ونظام إنذار الحريق FAS.</p>`
          }
        },
        partners: {
          label: { en: 'Partners', ar: 'الشركاء' },
          content: {
            en: `<ul class="list-disc list-inside text-slate-400 space-y-1">
          <li>Active Networking Systems</li>
          <li>Fire Alarm Technologies</li>
          <li>BMS Integrators</li>
        </ul>`,
            ar: `<ul class=\"list-disc list-inside text-slate-400 space-y-1\">
          <li>أنظمة الشبكات النشطة</li>
          <li>تقنيات إنذار الحريق</li>
          <li>مُكاملوا أنظمة إدارة المباني</li>
        </ul>`
          }
        },
        figures: {
          label: { en: 'Project Figures', ar: 'أرقام المشروع' },
          content: {
            en: `<div id="figures-tab" class="tab-pane ">
<div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
  <div class="bg-slate-800/80 p-6 rounded-lg shadow-lg hover:bg-[#1eaae7]/90 transition duration-300">
    <div class="text-3xl font-bold mb-2">6.5M SAR</div>
    <div class="text-sm text-slate-300">Project Value</div>
  </div>
  <div class="bg-slate-800/80 p-6 rounded-lg shadow-lg hover:bg-[#1eaae7]/90 transition duration-300">
    <div class="text-3xl font-bold mb-2">12,000+</div>
    <div class="text-sm text-slate-300">Man Days</div>
  </div>
  <div class="bg-slate-800/80 p-6 rounded-lg shadow-lg hover:bg-[#1eaae7]/90 transition duration-300">
    <div class="text-3xl font-bold mb-2">400,000m+</div>
    <div class="text-sm text-slate-300">Fiber & Cabling</div>
  </div>
  <div class="bg-slate-800/80 p-6 rounded-lg shadow-lg hover:bg-[#1eaae7]/90 transition duration-300">
    <div class="text-3xl font-bold mb-2">4 Systems</div>
    <div class="text-sm text-slate-300">PA, FAS, ACS, BMS</div>
  </div>
</div>
</div>
`,
            ar: `<div id=\"figures-tab\" class=\"tab-pane \">
<div class=\"grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white\">
  <div class=\"bg-slate-800/80 p-6 rounded-lg shadow-lg hover:bg-[#1eaae7]/90 transition duration-300\">
    <div class=\"text-3xl font-bold mb-2\">6.5 مليون ريال</div>
    <div class=\"text-sm text-slate-300\">قيمة المشروع</div>
  </div>
  <div class=\"bg-slate-800/80 p-6 rounded-lg shadow-lg hover:bg-[#1eaae7]/90 transition duration-300\">
    <div class=\"text-3xl font-bold mb-2\">+12,000</div>
    <div class=\"text-sm text-slate-300\">أيام العمل</div>
  </div>
  <div class=\"bg-slate-800/80 p-6 rounded-lg shadow-lg hover:bg-[#1eaae7]/90 transition duration-300\">
    <div class=\"text-3xl font-bold mb-2\">+400,000م</div>
    <div class=\"text-sm text-slate-300\">ألياف وكابلات</div>
  </div>
  <div class=\"bg-slate-800/80 p-6 rounded-lg shadow-lg hover:bg-[#1eaae7]/90 transition duration-300\">
    <div class=\"text-3xl font-bold mb-2\">4 أنظمة</div>
    <div class=\"text-sm text-slate-300\">PA, FAS, ACS, BMS</div>
  </div>
</div>
</div>`
          }
        },
        gallery: {
          label: { en: 'Gallery', ar: 'المعرض' },
          content: {
            en: `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="https://placehold.co/600x400?text=KKIA+1" alt="KKIA gallery photo 1" class="rounded-md w-full" loading="lazy">
          <img src="https://placehold.co/600x400?text=KKIA+2" alt="KKIA gallery photo 2" class="rounded-md w-full" loading="lazy">
        </div>`,
            ar: `<div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">
          <img src=\"https://placehold.co/600x400?text=KKIA+1\" alt=\"صورة معرض KKIA 1\" class=\"rounded-md w-full\" loading=\"lazy\">
          <img src=\"https://placehold.co/600x400?text=KKIA+2\" alt=\"صورة معرض KKIA 2\" class=\"rounded-md w-full\" loading=\"lazy\">
        </div>`
          }
        }
      }
    },
    privacy: {
      title: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
      tabs: {
        fullcontent: {
          label: { en: '', ar: '' },
          content: {
            en: `
          <div class="text-slate-300 w-full space-y-6">
            <p class="text-sm text-slate-400">Last updated: 30 Aug 2025</p>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">Introduction</h3>
              <p>
                We value your privacy. This policy explains what information we collect, how we use it,
                the choices you have, and how we keep your information secure when you use our website and
                contact services.
              </p>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">Information We Collect</h3>
              <ul class="list-disc list-inside text-slate-400 space-y-1">
                <li><span class="text-slate-300">Information you provide:</span> name, email, phone, company, and message content submitted via forms.</li>
                <li><span class="text-slate-300">Automatic data:</span> IP address, device/browser type, pages visited, and interactions collected through cookies or similar technologies to improve performance and security.</li>
              </ul>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">How We Use Information</h3>
              <ul class="list-disc list-inside text-slate-400 space-y-1">
                <li>Respond to inquiries and provide requested services.</li>
                <li>Operate, maintain, and improve our website and user experience.</li>
                <li>Secure our services and prevent fraud or misuse.</li>
                <li>Comply with legal obligations and enforce our terms.</li>
              </ul>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">Cookies</h3>
              <p>Cookies are small files stored on your device to help the site function and improve performance. You can control cookies through your browser settings. Disabling cookies may affect certain features.</p>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">Sharing and Disclosure</h3>
              <p>We do not sell or rent your personal information. We may share limited information with trusted providers who help us operate the site, subject to confidentiality obligations, or when required by law.</p>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">Data Security</h3>
              <p>We use appropriate technical and organizational measures to protect information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">Data Retention</h3>
              <p>We retain personal information only for as long as necessary for the purposes described above or as required by applicable laws.</p>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">Your Choices and Rights</h3>
              <p>You may request access, correction, or deletion of your personal information subject to applicable law. To make a request, please contact us using the details below.</p>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">Third-Party Links</h3>
              <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices. Please review their policies.</p>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">Contact Us</h3>
              <p>If you have questions about this policy or your data, contact us via the form on the Contact section.</p>
            </div>
          </div>
        `,
            ar: `
          <div class=\"text-slate-300 w-full space-y-6\" dir=\"rtl\">
            <p class=\"text-sm text-slate-400\">آخر تحديث: 30 أغسطس 2025</p>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">مقدمة</h3>
              <p>
                نحن نحترم خصوصيتك. توضح هذه السياسة أنواع المعلومات التي نجمعها وكيف نستخدمها
                والخيارات المتاحة لك وكيف نحافظ على أمان معلوماتك عند استخدامك لموقعنا وخدمات التواصل.
              </p>
            </div>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">المعلومات التي نجمعها</h3>
              <ul class=\"list-disc list-inside text-slate-400 space-y-1\">
                <li><span class=\"text-slate-300\">معلومات تقدمها أنت:</span> الاسم والبريد الإلكتروني ورقم الهاتف والشركة ومحتوى الرسالة المرسلة عبر النماذج.</li>
                <li><span class=\"text-slate-300\">بيانات تُجمع تلقائيًا:</span> عنوان بروتوكول الإنترنت (IP) ونوع الجهاز/المتصفح والصفحات التي تمت زيارتها والتفاعلات، ويجري جمعها عبر ملفات تعريف الارتباط وتقنيات مشابهة لتحسين الأداء والأمان.</li>
              </ul>
            </div>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">كيفية استخدامنا للمعلومات</h3>
              <ul class=\"list-disc list-inside text-slate-400 space-y-1\">
                <li>الرد على الاستفسارات وتقديم الخدمات المطلوبة.</li>
                <li>تشغيل الموقع وصيانته وتحسين تجربة المستخدم.</li>
                <li>حماية خدماتنا ومنع الاحتيال أو إساءة الاستخدام.</li>
                <li>الامتثال للالتزامات القانونية وتطبيق الشروط.</li>
              </ul>
            </div>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">ملفات تعريف الارتباط (الكوكيز)</h3>
              <p>هي ملفات صغيرة تُخزَّن على جهازك لمساعدة الموقع على العمل وتحسين الأداء. يمكنك التحكم في إعدادات الكوكيز من خلال المتصفح. قد يؤثر التعطيل على بعض الميزات.</p>
            </div>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">المشاركة والإفصاح</h3>
              <p>لا نبيع معلوماتك الشخصية ولا نؤجرها. قد نشارك قدرًا محدودًا من المعلومات مع مزودين موثوقين يساعدوننا في تشغيل الموقع، وفقًا لالتزامات السرية، أو عند الطلب القانوني.</p>
            </div>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">أمن البيانات</h3>
              <p>نطبق تدابير تقنية وتنظيمية مناسبة لحماية المعلومات من الوصول أو التعديل أو الإفصاح أو الإتلاف غير المصرح به.</p>
            </div>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">الاحتفاظ بالبيانات</h3>
              <p>نحتفظ بالمعلومات الشخصية فقط للمدة اللازمة للأغراض الموضحة أعلاه أو حسب ما يتطلبه القانون المعمول به.</p>
            </div>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">خياراتك وحقوقك</h3>
              <p>يمكنك طلب الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها وفقًا للقانون المعمول به. لإرسال طلب، يُرجى التواصل معنا عبر نموذج الاتصال.</p>
            </div>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">روابط الجهات الخارجية</h3>
              <p>قد يحتوي موقعنا على روابط لمواقع تابعة لجهات خارجية. لسنا مسؤولين عن ممارسات الخصوصية لديهم. يُرجى مراجعة سياساتهم.</p>
            </div>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">تواصل معنا</h3>
              <p>للاستفسار حول هذه السياسة أو بياناتك، يُرجى التواصل معنا عبر قسم التواصل.</p>
            </div>
          </div>
        `
          }
        }
      }
    },
    terms: {
      title: { en: 'Terms of Service', ar: 'شروط الاستخدام' },
      tabs: {
        fullcontent: {
          label: { en: '', ar: '' },
          content: {
            en: `
          <div class="text-slate-300 w-full space-y-6">
            <p class="text-sm text-slate-400">Last updated: 30 Aug 2025</p>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">Acceptance of Terms</h3>
              <p>By accessing or using our website, you agree to these Terms of Service and our Privacy Policy. If you do not agree, please stop using the site.</p>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">Use of the Site</h3>
              <ul class="list-disc list-inside text-slate-400 space-y-1">
                <li>Use the site only for lawful purposes and in accordance with these terms.</li>
                <li>Do not attempt to disrupt, damage, or gain unauthorized access to the site or related systems.</li>
              </ul>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">Intellectual Property</h3>
              <p>All content, logos, graphics, and materials on this site are owned by AFAQ Digital Infrastructure or its licensors and are protected by applicable laws. You may not copy, modify, or distribute without permission.</p>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">Third-Party Links</h3>
              <p>Links to third-party websites are provided for convenience only. We are not responsible for their content or practices.</p>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">Disclaimers</h3>
              <p>The site is provided "as is" without warranties of any kind, to the fullest extent permitted by law.</p>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">Limitation of Liability</h3>
              <p>We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the site.</p>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">Changes to Terms</h3>
              <p>We may update these terms from time to time. Continued use of the site constitutes acceptance of any changes.</p>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-semibold text-white">Contact Information</h3>
              <p>For questions about these terms, please contact us through the Contact section.</p>
            </div>
          </div>
        `,
            ar: `
          <div class=\"text-slate-300 w-full space-y-6\" dir=\"rtl\">
            <p class=\"text-sm text-slate-400\">آخر تحديث: 30 أغسطس 2025</p>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">قبول الشروط</h3>
              <p>باستخدام موقعنا، فإنك توافق على شروط الاستخدام هذه وسياسة الخصوصية. إذا كنت لا توافق، يُرجى التوقف عن استخدام الموقع.</p>
            </div>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">استخدام الموقع</h3>
              <ul class=\"list-disc list-inside text-slate-400 space-y-1\">
                <li>استخدم الموقع فقط للأغراض القانونية ووفقًا لهذه الشروط.</li>
                <li>لا تحاول تعطيل الموقع أو إلحاق الضرر به أو الوصول إليه بطريقة غير مصرح بها.</li>
              </ul>
            </div>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">الملكية الفكرية</h3>
              <p>جميع المحتويات والشعارات والرسوم والمواد في هذا الموقع مملوكة لشركة آفاق للبنية التحتية الرقمية أو مرخصيها ومحمية بالقوانين المعمول بها. لا يجوز النسخ أو التعديل أو التوزيع بدون إذن.</p>
            </div>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">روابط الجهات الخارجية</h3>
              <p>الروابط لمواقع الجهات الخارجية مقدمة للراحة فقط. لسنا مسؤولين عن محتواها أو ممارساتها.</p>
            </div>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">إخلاء المسؤولية</h3>
              <p>يُقدم الموقع \"كما هو\" بدون ضمانات من أي نوع، إلى أقصى حد يسمح به القانون.</p>
            </div>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">تحديد المسؤولية</h3>
              <p>لن نكون مسؤولين عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية ناشئة عن استخدامك للموقع.</p>
            </div>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">تغييرات الشروط</h3>
              <p>قد نحدث هذه الشروط من وقت لآخر. الاستمرار في استخدام الموقع يعني قبول أي تغييرات.</p>
            </div>

            <div class=\"space-y-3\">
              <h3 class=\"text-xl font-semibold text-white\">معلومات التواصل</h3>
              <p>للاستفسار حول هذه الشروط، يُرجى التواصل معنا عبر قسم التواصل.</p>
            </div>
          </div>
        `
          }
        }
      }
    }
  };

  const modalData = modals[id];
  if (modalData) {
    renderModal(modalData, id);
    document.getElementById(`modal-${id}`).classList.remove('hidden');
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  document.getElementById(`modal-${id}`).classList.add('hidden');
  // Restore body scrolling when modal is closed
  document.body.style.overflow = 'auto';
}

function switchTab(id, key) {
  const tabs = document.querySelectorAll(`#modal-${id} [id^="${id}-tab-content-"]`);
  const buttons = document.querySelectorAll(`#modal-${id} [id^="${id}-tab-btn-"]`);

  tabs.forEach(tab => tab.classList.add('hidden'));
  buttons.forEach(btn => {
    btn.classList.remove('bg-[#1eaae7]', 'text-white');
    btn.classList.add('text-slate-300', 'hover:bg-slate-700');
  });

  document.getElementById(`${id}-tab-content-${key}`).classList.remove('hidden');
  const activeBtn = document.getElementById(`${id}-tab-btn-${key}`);
  activeBtn.classList.add('bg-[#1eaae7]', 'text-white');
  activeBtn.classList.remove('text-slate-300', 'hover:bg-slate-700');
}

// Partner tab switching functionality
function switchPartnerTab(tabId, event) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelector(`#tab-${tabId}`).classList.remove('hidden');

  // Update active tab styling
  document.querySelectorAll('.partner-tab').forEach(tab => {
    tab.classList.remove('active-tab');
  });
  event.target.classList.add('active-tab');
}

// DOM Content Loaded Event Listener
document.addEventListener("DOMContentLoaded", function () {
  // Accordion functionality
  const accordionBtns = document.querySelectorAll(".accordion-btn");
  accordionBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector(".accordion-icon");

      // Close all other accordions
      accordionBtns.forEach((otherBtn) => {
        if (otherBtn !== this) {
          const otherContent = otherBtn.nextElementSibling;
          const otherIcon = otherBtn.querySelector(".accordion-icon");
          otherContent.classList.remove("active");
          otherIcon.style.transform = "rotate(0deg)";
        }
      });

      // Toggle current accordion
      if (content.classList.contains("active")) {
        content.classList.remove("active");
        icon.style.transform = "rotate(0deg)";
      } else {
        content.classList.add("active");
        icon.style.transform = "rotate(180deg)";
      }
    });
  });

  // Navigation active state functionality
  const navItems = document.querySelectorAll('.nav-item');

  // Add click event listeners to all nav items
  navItems.forEach(item => {
    item.addEventListener('click', function (e) {
      // Remove active class from all nav items
      navItems.forEach(nav => nav.classList.remove('active'));
      // Add active class to clicked item
      this.classList.add('active');
    });
  });

  // Set active nav item based on scroll position
  const sections = document.querySelectorAll('section[id]');

  function setActiveNavOnScroll() {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  }

  // Listen for scroll events
  window.addEventListener('scroll', setActiveNavOnScroll);
  // Set initial active state
  setActiveNavOnScroll();
});

// Language and mobile menu functionality
var isArabic = localStorage.getItem('isArabic') === 'true';
var mobileMenu = document.getElementById('mobile-menu');
var mobileMenuButton = document.getElementById('mobile-menu-button');
var mobileMenuIcon = mobileMenuButton ? mobileMenuButton.querySelector('i') : null;

// Sync form fields so only visible language inputs submit
function syncFormLangFields() {
  var isRTL = document.documentElement.dir === 'rtl';
  var enableIfVisible = function (el, enable) {
    if (!el) return;
    var tag = el.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
      el.disabled = !enable;
    }
  };
  document.querySelectorAll('form .english').forEach(function (el) { enableIfVisible(el, !isRTL); });
  document.querySelectorAll('form .arabic').forEach(function (el) { enableIfVisible(el, isRTL); });

  var hiddenLang = document.getElementById('form-language');
  if (hiddenLang) hiddenLang.value = isRTL ? 'ar' : 'en';
}

// Define a function to update the language attributes of the site and the button
function setSeoMeta() {
  try {
    var origin = window.location.origin || '';
    var pathname = window.location.pathname || '/';
    var baseUrl = origin + pathname;

    // Update canonical link
    var canonicalLink = document.getElementById('canonical-link');
    if (canonicalLink) {
      canonicalLink.href = baseUrl;
    }

    // Update Open Graph meta tags
    var ogUrl = document.getElementById('og-url');
    if (ogUrl) {
      ogUrl.content = baseUrl;
    }

    // Update hreflang links
    var altEn = document.getElementById('alt-en');
    var altAr = document.getElementById('alt-ar');
    if (altEn) altEn.href = baseUrl;
    if (altAr) altAr.href = baseUrl;

    // Update meta descriptions and titles based on language
    if (isArabic) {
      // Arabic meta content
      document.getElementById('meta-description').content = 'آفاق للبنية التحتية الرقمية (AFAQ ADI) تقدم حلول تقنية معلومات وأنظمة ELV موثوقة وقابلة للتوسع في المملكة العربية السعودية: تشغيل مراكز البيانات والشبكات والأمان وتكامل الأنظمة.';
      document.getElementById('og-title').content = 'آفاق للبنية التحتية الرقمية - دائماً موثوقون، دائماً جاهزون';
      document.getElementById('og-description').content = 'حلول تقنية معلومات وأنظمة ELV موثوقة وقابلة للتوسع في المملكة العربية السعودية.';
      document.getElementById('tw-title').content = 'آفاق للبنية التحتية الرقمية - دائماً موثوقون، دائماً جاهزون';
      document.getElementById('tw-description').content = 'حلول تقنية معلومات وأنظمة ELV موثوقة وقابلة للتوسع في المملكة العربية السعودية.';
      document.title = 'آفاق للبنية التحتية الرقمية - دائماً موثوقون، دائماً جاهزون';
    } else {
      // English meta content
      document.getElementById('meta-description').content = 'AFAQ Digital Infrastructure (AFAQ ADI) delivers reliable, scalable IT and ELV solutions in Saudi Arabia: data center operation, networking, security, and system integration.';
      document.getElementById('og-title').content = 'AFAQ Digital Infrastructure - Always Reliable, Always Ready';
      document.getElementById('og-description').content = 'Reliable, scalable IT and ELV solutions in Saudi Arabia.';
      document.getElementById('tw-title').content = 'AFAQ Digital Infrastructure - Always Reliable, Always Ready';
      document.getElementById('tw-description').content = 'Reliable, scalable IT and ELV solutions in Saudi Arabia.';
      document.title = 'AFAQ Digital Infrastructure - Always Reliable, Always Ready';
    }
  } catch (e) {
    console.warn('Error updating SEO meta:', e);
  }
}

function updateLangAttributes() {
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.documentElement.lang = isArabic ? 'ar' : 'en';

  // Update language button text
  var langBtn = document.getElementById('langbtn');
  var langBtnMobile = document.getElementById('langbtn-mobile');
  if (langBtn) {
    langBtn.textContent = isArabic ? 'English' : 'عربى';
  }
  if (langBtnMobile) {
    langBtnMobile.textContent = isArabic ? 'English' : 'عربى';
  }

  // Update SEO meta tags
  setSeoMeta();

  // Sync form fields
  syncFormLangFields();
}

// Define a function to toggle the language
function toggleLanguage() {
  isArabic = !isArabic;
  localStorage.setItem('isArabic', isArabic);
  updateLangAttributes();
}

// Initialize language on page load
updateLangAttributes();

// Mobile menu toggle
if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', function () {
    var isOpen = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    var newOpen = !isOpen;
    mobileMenu.classList.toggle('hidden', !newOpen);
    mobileMenuButton.setAttribute('aria-expanded', newOpen.toString());
    if (mobileMenuIcon) {
      mobileMenuIcon.className = newOpen ? 'ri-close-line text-2xl' : 'ri-menu-line text-2xl';
    }
  });
  // Close menu on navigation click
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.add('hidden');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      if (mobileMenuIcon) {
        mobileMenuIcon.className = 'ri-menu-line text-2xl';
      }
    });
  });
}

// Initialize hero background video (autoplay muted loop with fallback image)
document.addEventListener('DOMContentLoaded', function () {
  try {
    var heroSection = document.querySelector('.hero-section');
    var heroVideo = document.getElementById('heroVideo');
    if (!heroSection || !heroVideo) return;

    heroVideo.muted = true;
    heroVideo.loop = true;
    if ('playsInline' in heroVideo) heroVideo.playsInline = true;

    var revealVideo = function () {
      heroSection.classList.add('hero-playing');
    };

    var onLoaded = function () {
      heroVideo.removeEventListener('loadeddata', onLoaded);
      revealVideo();
    };
    heroVideo.addEventListener('loadeddata', onLoaded);

    var playPromise = heroVideo.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.then(revealVideo).catch(function () { /* Autoplay blocked; keep image */ });
    }
  } catch (_) { /* noop */ }
});
