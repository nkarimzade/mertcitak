export const treatmentSources = {
  implantAda: { label: 'ADA / MouthHealthy: İmplantlar', url: 'https://www.mouthhealthy.org/all-topics-a-z/implants' },
  implantClinic: { label: 'Cleveland Clinic: Diş implantları', url: 'https://my.clevelandclinic.org/health/treatments/10903-dental-implants' },
  digitalAda: { label: 'ADA: Dijital diş hekimliği teknolojileri', url: 'https://adanews.ada.org/ada-news/2022/june/digital-dentistry-what-to-know-about-a-few-popular-technologies' },
  orthodontics: { label: 'NHS: Ortodonti', url: 'https://www.nhs.uk/tests-and-treatments/orthodontics/' },
  braces: { label: 'NHS: Diş teli tedavisi ve bakım', url: 'https://www.nhs.uk/tests-and-treatments/braces/' },
  aesthetic: { label: 'Cleveland Clinic: Estetik diş hekimliği', url: 'https://my.clevelandclinic.org/health/treatments/23914-cosmetic-dentistry' },
  cosmeticFoundation: { label: 'Oral Health Foundation: Estetik uygulamalar', url: 'https://www.dentalhealth.org/cosmetic-treatment' },
  crownsClinic: { label: 'Cleveland Clinic: Diş kaplamaları', url: 'https://my.clevelandclinic.org/health/treatments/10923-dental-crowns' },
  crownsAda: { label: 'ADA / MouthHealthy: Kronlar', url: 'https://www.mouthhealthy.org/all-topics-a-z/crowns' },
  whiteningNhs: { label: 'NHS: Diş beyazlatma', url: 'https://www.nhs.uk/tests-and-treatments/teeth-whitening/' },
  whiteningAda: { label: 'ADA / MouthHealthy: Diş beyazlatma', url: 'https://www.mouthhealthy.org/all-topics-a-z/teeth-whitening' },
  rootNhs: { label: 'NHS: Kanal tedavisi', url: 'https://www.nhs.uk/tests-and-treatments/root-canal-treatment/' },
  rootAae: { label: 'American Association of Endodontists: Kanal tedavisi', url: 'https://www.aae.org/patients/root-canal-treatment/' },
  gumAda: { label: 'ADA / MouthHealthy: Diş eti hastalıkları', url: 'https://www.mouthhealthy.org/all-topics-a-z/gum-disease.aspx/' },
  periodontics: { label: 'ADA / MouthHealthy: Periodontoloji', url: 'https://www.mouthhealthy.org/all-topics-a-z/periodontics' },
  firstVisit: { label: 'ADA / MouthHealthy: Çocuklarda ilk diş muayenesi', url: 'https://www.mouthhealthy.org/life-stages/babies-and-kids/first-dental-visit-for-baby' },
  childHabits: { label: 'ADA / MouthHealthy: Çocuklarda ağız bakımı', url: 'https://www.mouthhealthy.org/life-stages/babies-and-kids/healthy-habits-babies-and-kids' },
  sealants: { label: 'ADA / MouthHealthy: Fissür örtücüler', url: 'https://www.mouthhealthy.org/all-topics-a-z/sealants' },
  surgery: { label: 'Cleveland Clinic: Ağız cerrahisi', url: 'https://my.clevelandclinic.org/health/procedures/oral-surgery' },
  wisdom: { label: 'NHS: Yirmi yaş dişi çekimi', url: 'https://www.nhs.uk/tests-and-treatments/wisdom-tooth-removal/' },
  dentures: { label: 'NHS: Hareketli diş protezleri', url: 'https://www.nhs.uk/tests-and-treatments/dentures/' },
  bridges: { label: 'ADA / MouthHealthy: Diş köprüleri', url: 'https://www.mouthhealthy.org/all-topics-a-z/bridges' },
}

export const treatmentDetails = {
  'implant-tedavisi': {
    sections: [
      {
        id: 'nedir', title: 'İmplant tedavisi nedir?',
        paragraphs: ['Diş implantı, eksik dişin kökü yerine çene kemiğine yerleştirilen bir yapıdır. Üzerine kron, köprü veya protez bağlanarak eksik diş bölgesinin görünümü ve işlevi desteklenebilir. Tek diş eksikliğinde ve birden fazla dişin yerine konmasında farklı planlamalar yapılabilir.'],
        sources: ['implantClinic'],
      },
      {
        id: 'degerlendirme', title: 'Uygunluk nasıl değerlendirilir?',
        paragraphs: ['Diş etlerinin sağlığı, çene kemiği, genel sağlık durumu ve kullanılan ilaçlar değerlendirilir. Gerektiğinde görüntüleme yapılır. Yetersiz kemik, aktif diş eti hastalığı, kontrolsüz diyabet veya sigara kullanımı planı ve iyileşmeyi etkileyebilir. Bazı durumlarda önce ek tedavi gerekir.'],
        sources: ['implantClinic'],
      },
      {
        id: 'surec', title: 'Tedavi süreci nasıl ilerler?',
        paragraphs: ['Genel süreç; implantın yerleştirilmesi, kemiğin implant çevresinde iyileşmesi ve üst yapının hazırlanması aşamalarından oluşur. İyileşme birkaç ay sürebilir. Geçici diş ve üst yapının ne zaman takılacağı kişiye göre belirlenir; her hastada aynı gün tamamlanan bir işlem değildir.'],
        sources: ['implantAda'],
      },
      {
        id: 'bakim', title: 'Bakım ve olası riskler',
        paragraphs: ['İmplant çevresinin temizliği ve düzenli kontroller önemlidir. Enfeksiyon, implantın kemikle yeterince bütünleşmemesi veya çevre dokuların etkilenmesi gibi riskler vardır. İmplantın sallanması, irin, ateş ya da belirgin şişlik olduğunda hekime başvurulmalıdır.'],
        sources: ['implantClinic'],
      },
    ],
    faqs: [
      { question: 'İmplant ömür boyu sorunsuz kalır mı?', answer: 'Uzun süre kullanılabilir; ancak ömür veya başarı garantisi verilemez. Düzenli bakım ve kontroller tedavinin takibinin bir parçasıdır.', sources: ['implantClinic'] },
      { question: 'Eksik diş için tek seçenek implant mı?', answer: 'Hayır. Köprü ve hareketli protezler de değerlendirilebilir. Seçenekler ağız yapısı, sağlık durumu ve beklentilere göre hekimle birlikte karşılaştırılır.', sources: ['dentures'] },
    ],
  },
  'dijital-dis-hekimligi': {
    sections: [
      {
        id: 'nedir', title: 'Dijital diş hekimliği nedir?',
        paragraphs: ['Dijital diş hekimliği; ağız içi tarama, dijital görüntüleme ve bilgisayar destekli tasarım gibi araçların muayene ve tedavi planlamasında kullanılmasıdır. Tek başına bir tedavi değildir; farklı uygulamaların ölçü, tasarım ve üretim aşamalarını destekler.'],
        sources: ['digitalAda'],
      },
      {
        id: 'degerlendirme', title: 'Hangi alanlarda kullanılabilir?',
        bullets: ['Kron, köprü ve implant üstü yapılarda dijital ölçü.', 'Şeffaf plak ve koruyucu apareylerin planlanması.', 'Tedavi modelleri ve cerrahi rehberlerin hazırlanması.'],
        sources: ['digitalAda'],
      },
      {
        id: 'surec', title: 'Tarama ve tasarım süreci',
        paragraphs: ['Ağız içi tarayıcıyla dişlerin yüzey bilgileri kaydedilir. Hekim kayıtları kontrol eder; uygun durumlarda tasarım ve laboratuvar üretimi dijital verilerle yürütülür. Üretilen yapının ağızdaki uyumu ayrıca değerlendirilir.'],
        sources: ['digitalAda'],
      },
      {
        id: 'bakim', title: 'Teknolojinin sınırları',
        paragraphs: ['Tarama bazı hastalarda ölçü almayı kolaylaştırabilir. Ancak doğruluk; cihaz, uygulama ve tedavi türüne bağlıdır. Özellikle geniş protez planlarında geleneksel ölçü gerekebilir. Dijital yöntemler hekim değerlendirmesinin yerini almaz.'],
        sources: ['digitalAda'],
      },
    ],
    faqs: [
      { question: 'Her işlem aynı gün biter mi?', answer: 'Hayır. Dijital yöntem kullanılması, her tedavinin aynı gün tamamlanacağı anlamına gelmez.', sources: ['digitalAda'] },
      { question: 'Her hastada dijital ölçü yeterli midir?', answer: 'Hayır. Ölçü yöntemi ve ek kayıt ihtiyacı, planlanan uygulamaya göre belirlenir.', sources: ['digitalAda'] },
    ],
  },
  ortodonti: {
    sections: [
      {
        id: 'nedir', title: 'Ortodonti nedir?',
        paragraphs: ['Ortodonti, dişlerin dizilimi ve alt-üst dişlerin kapanış ilişkisiyle ilgilenir. Çapraşıklık, aralıklar veya kapanış sorunlarında dişlerin konumunu düzenlemeyi amaçlar. Yalnızca görünüm değil, dişlerin işlevi ve temizlenebilirliği de değerlendirilir.'],
        sources: ['orthodontics'],
      },
      {
        id: 'degerlendirme', title: 'Kimlerde değerlendirilir?',
        paragraphs: ['Çocuklar, gençler ve yetişkinler ortodontik açıdan değerlendirilebilir. Dişlerin sürmesi, çene gelişimi ve diş eti sağlığı planı etkiler. Tedaviye başlamadan önce ağız bakımının yeterli olması ve çürük gibi sorunların kontrol altına alınması önemlidir.'],
        sources: ['orthodontics'],
      },
      {
        id: 'surec', title: 'Tedavi seçenekleri ve takip',
        paragraphs: ['Muayene, fotoğraf, ölçü veya tarama ve gerekli görüntülemelerle plan oluşturulur. Sabit diş telleri, hareketli apareyler veya uygun vakalarda şeffaf plaklar kullanılabilir. Diş hareketleri düzenli kontrollerle takip edilir. Süre, sorunun kapsamına ve tedaviye uyuma göre değişir.'],
        sources: ['orthodontics'],
      },
      {
        id: 'bakim', title: 'Tedavi sırasında ve sonrasında bakım',
        paragraphs: ['Tel ve dişlerin çevresinde biriken plak, çürük ve diş eti sorunlarına yol açabilir. Hekimin tarif ettiği temizlik sürdürülmelidir. Sert ve yapışkan yiyecekler apareylere zarar verebilir. Tedavi sonrasında dişlerin yeni konumunu korumak için pekiştirme apareyi gerekebilir.'],
        sources: ['braces'],
      },
    ],
    faqs: [
      { question: 'Yetişkinlerde ortodonti yapılabilir mi?', answer: 'Evet, uygun ağız ve diş eti sağlığı olan yetişkinlerde de değerlendirilebilir. Uygun yöntemi muayene belirler.', sources: ['orthodontics'] },
      { question: 'Tel veya plak bittikten sonra takip gerekir mi?', answer: 'Evet. Pekiştirme tedavisi ve hekim kontrolleri dişlerin yeni konumunun korunmasına yardımcı olur.', sources: ['braces'] },
    ],
  },
  'estetik-dis-hekimligi': {
    sections: [
      {
        id: 'nedir', title: 'Estetik diş hekimliği nedir?',
        paragraphs: ['Estetik diş hekimliği, dişlerin rengi, şekli ve gülüşteki uyumuyla ilgilenir. Dişlerin görünümünü iyileştirmeyi hedefleyen farklı uygulamaları kapsar. Planlama yapılırken diş ve diş eti sağlığı, işlev ve kişinin beklentileri birlikte ele alınmalıdır.'],
        sources: ['aesthetic'],
      },
      {
        id: 'degerlendirme', title: 'Hangi durumlarda değerlendirilir?',
        bullets: ['Dişlerde renklenme ve ton farklılıkları.', 'Küçük kırıklar, şekil farklılıkları veya aralıklar.', 'Gülüşte dişlerin ve diş etlerinin görünümüne ilişkin beklentiler.'],
        sources: ['aesthetic'],
      },
      {
        id: 'surec', title: 'Kişiye göre planlanan seçenekler',
        paragraphs: ['Muayenede şikâyetin kaynağı ve ağız sağlığı değerlendirilir. İhtiyaca göre beyazlatma, diş renginde dolgu, kaplama veya ortodontik düzenleme gibi farklı seçenekler konuşulabilir. Her gülüş için aynı yöntem gerekli değildir; tek bir işlem yerine aşamalı bir plan da oluşturulabilir.'],
        sources: ['cosmeticFoundation'],
      },
      {
        id: 'bakim', title: 'Beklentiler ve bakım',
        paragraphs: ['Sonucun devamlılığı uygulamanın türüne ve ağız bakımına bağlıdır. Bazı işlemler diş dokusunda geri döndürülemeyen değişiklikler oluşturabilir; hassasiyet veya ileride yenileme ihtiyacı doğabilir. İşlem öncesinde alternatifler ve sınırlamalar konuşulmalıdır. Düzenli kontroller estetik uygulamalardan sonra da sürdürülür.'],
        sources: ['aesthetic'],
      },
    ],
    faqs: [
      { question: 'Estetik bir işlem için sağlıklı dişlere kaplama gerekir mi?', answer: 'Her zaman değil. Soruna göre daha sınırlı müdahaleler veya farklı tedaviler mümkün olabilir; seçenekler muayenede değerlendirilir.', sources: ['cosmeticFoundation'] },
      { question: 'Sonuç herkes için aynı olur mu?', answer: 'Hayır. Başlangıçtaki diş yapısı, seçilen uygulama ve bakım alışkanlıkları sonucu etkiler. Belirli bir görünüm veya kalıcılık garanti edilemez.', sources: ['aesthetic'] },
    ],
  },
  'zirkonyum-dis-tedavisi': {
    sections: [
      {
        id: 'nedir', title: 'Zirkonyum kaplama nedir?',
        paragraphs: ['Zirkonyum olarak bilinen zirkonya, diş kaplamalarında kullanılan bir seramik malzemedir. Kron, dişin görünen bölümünü örten kişiye özel bir yapıdır. Malzeme seçiminde dişin konumu, çiğneme kuvvetleri ve estetik beklentiler birlikte değerlendirilir.'],
        sources: ['crownsClinic'],
      },
      {
        id: 'degerlendirme', title: 'Hangi durumlarda kaplama düşünülür?',
        paragraphs: ['Geniş dolgulu, kırılmış veya zayıflamış dişleri desteklemek; şekil ve renk sorunlarını düzenlemek için kron düşünülebilir. Kanal tedavili dişlerde veya implant üstünde de kullanılabilir. Her dişin kaplanması gerekmez; kalan sağlam doku ve diğer seçenekler değerlendirilmelidir.'],
        sources: ['crownsAda'],
      },
      {
        id: 'surec', title: 'Hazırlık, ölçü ve uyum kontrolü',
        paragraphs: ['Gerekli hazırlıktan sonra geleneksel veya dijital ölçü alınır. Laboratuvarda hazırlanan yapının rengi, şekli, kenar uyumu ve kapanışı kontrol edilir. Uygun bulunduğunda sabitlenir. Hazırlık sırasında diş dokusunun bir kısmının kaldırılması gerekebilir.'],
        sources: ['crownsClinic'],
      },
      {
        id: 'bakim', title: 'Kaplamanın bakımı ve sınırları',
        paragraphs: ['Kaplama, altındaki dişi çürükten tamamen korumaz. Diş eti kenarı ve diş araları düzenli temizlenmelidir. Hassasiyet, kırılma veya gevşeme gelişebilir. Çok sert cisimleri ısırmaktan kaçınılmalı; kaplamada hasar veya gevşeme fark edilirse hekim değerlendirmesi alınmalıdır.'],
        sources: ['crownsClinic'],
      },
    ],
    faqs: [
      { question: 'Zirkonyum kaplama ile implant aynı şey midir?', answer: 'Hayır. İmplant eksik diş kökünün yerini alır; kaplama doğal dişin veya implant üst yapısının görünen kısmını tamamlar.', sources: ['implantClinic'] },
      { question: 'Kaplama hiç yenilenmez mi?', answer: 'Kaplamalar zamanla aşınabilir veya hasar görebilir. Kullanım süresi ağız bakımı ve kişisel koşullara bağlıdır; düzenli kontrol gerekir.', sources: ['crownsClinic'] },
    ],
  },
  'dis-beyazlatma': {
    sections: [
      {
        id: 'nedir', title: 'Diş beyazlatma nedir?',
        paragraphs: ['Beyazlatma, doğal dişlerin rengini açmayı amaçlayan bir uygulamadır. Beyazlatıcı ürünler, renklenmeye neden olan bileşenleri etkileyerek dişin daha açık görünmesini sağlayabilir. Diş taşı temizliği ve yüzey lekelerinin giderilmesiyle aynı işlem değildir.'],
        sources: ['whiteningAda'],
      },
      {
        id: 'degerlendirme', title: 'Önce ağız sağlığı değerlendirilir',
        paragraphs: ['Renklenmenin nedeni, çürükler, diş eti sağlığı ve mevcut restorasyonlar değerlendirilmelidir. Her renklenme aynı ölçüde yanıt vermez. Dolgular, kronlar ve protezler doğal diş gibi beyazlamaz; bu nedenle renk uyumu ayrıca planlanır.'],
        sources: ['whiteningAda'],
      },
      {
        id: 'surec', title: 'Uygulama yöntemleri',
        paragraphs: ['Uygun durumlarda klinikte uygulama veya hekim tarafından hazırlanan plaklarla evde uygulama seçenekleri değerlendirilebilir. Yöntem, ürün ve kullanım süresi hekimin planına göre belirlenir. Kontrolsüz ürün kullanımı yerine önce diş hekimi değerlendirmesi alınmalıdır.'],
        sources: ['whiteningNhs'],
      },
      {
        id: 'bakim', title: 'Hassasiyet ve sonucun korunması',
        paragraphs: ['Geçici diş hassasiyeti ve diş eti rahatsızlığı oluşabilir. Belirgin veya devam eden yakınmalar hekime bildirilmelidir. Sonuç kalıcı değildir; beslenme, sigara ve bakım alışkanlıklarına bağlı olarak renk yeniden değişebilir. Tekrar uygulama ihtiyacı hekimle değerlendirilir.'],
        sources: ['whiteningNhs'],
      },
    ],
    faqs: [
      { question: 'Kaplamalarım da beyazlar mı?', answer: 'Hayır. Beyazlatma, kaplama ve dolguların rengini değiştirmez. Doğal dişlerle renk farkı oluşabilir.', sources: ['whiteningAda'] },
      { question: 'Tek uygulamada belirli bir beyazlık garanti edilir mi?', answer: 'Hayır. Başlangıç rengi, renklenmenin nedeni ve dişlerin yanıtı farklıdır; hedef ve yöntem kişiye göre değerlendirilir.', sources: ['whiteningAda'] },
    ],
  },
  endodonti: {
    sections: [
      {
        id: 'nedir', title: 'Endodonti ve kanal tedavisi nedir?',
        paragraphs: ['Endodonti, dişin içindeki pulpa ve kök kanallarıyla ilgili sorunların tedavisiyle ilgilenir. Kanal tedavisinde iltihaplanmış veya enfekte iç doku uzaklaştırılır; kanallar temizlenir, şekillendirilir ve doldurulur. Amaç, uygun durumlarda doğal dişi ağızda korumaktır.'],
        sources: ['rootAae'],
      },
      {
        id: 'degerlendirme', title: 'Hangi durumlarda gerekebilir?',
        paragraphs: ['Derin çürük, çatlak, kırık veya dişin iç dokusunu etkileyen enfeksiyon kanal tedavisi gerektirebilir. Ağrı, hassasiyet veya apse değerlendirmeyi gerektirir; ancak yalnızca bir belirtiye bakılarak karar verilmez. Muayene ve gerekli görüntülemelerle dişin korunabilirliği değerlendirilir.'],
        sources: ['rootNhs'],
      },
      {
        id: 'surec', title: 'Temizleme, doldurma ve restorasyon',
        paragraphs: ['Genellikle lokal anestezi altında dişin iç kısmına ulaşılır. Etkilenen doku uzaklaştırılır, kanallar temizlenip doldurulur. Dişin üst bölümü dolgu veya gerekli durumlarda kronla restore edilir. Seans sayısı ve süre, enfeksiyona ve dişin yapısına göre değişebilir.'],
        sources: ['rootNhs'],
      },
      {
        id: 'bakim', title: 'Tedavi sonrası takip',
        paragraphs: ['Bir süre hassasiyet veya rahatsızlık hissedilebilir. Son restorasyonun tamamlanması ve kontrol ziyaretleri önemlidir. Şiddetlenen ağrı, belirgin şişlik veya iyileşmeyen yakınmalar hekime bildirilmelidir. Tedavili dişin çevresi de düzenli temizlenmeli ve ağız sağlığı takip edilmelidir.'],
        sources: ['rootNhs'],
      },
    ],
    faqs: [
      { question: 'Kanal tedavisi diş çekimi midir?', answer: 'Hayır. Kanal tedavisi, uygun olduğunda dişi korumaya yönelik bir uygulamadır; diş çekiminden farklıdır.', sources: ['rootAae'] },
      { question: 'Kanal tedavisinden sonra kaplama şart mı?', answer: 'Her dişte aynı restorasyon gerekmez. Kalan diş dokusu ve hasarın kapsamına göre dolgu veya kron planlanabilir.', sources: ['rootNhs'] },
    ],
  },
  periodontoloji: {
    sections: [
      {
        id: 'nedir', title: 'Periodontoloji nedir?',
        paragraphs: ['Periodontoloji, diş etleri ve dişi destekleyen dokuların sağlığıyla ilgilenir. Diş eti iltihabı olan gingivitis daha erken bir evredir. Periodontitis ise destek dokuları ve kemiği etkileyebilir; ilerlediğinde dişlerde sallanma ve kayıp gelişebilir.'],
        sources: ['gumAda'],
      },
      {
        id: 'degerlendirme', title: 'Hangi belirtiler önemlidir?',
        bullets: ['Fırçalarken veya diş aralarını temizlerken kanama.', 'Kızarıklık, şişlik, diş eti çekilmesi veya sürekli ağız kokusu.', 'Dişlerde sallanma ya da kapanış hissinde değişiklik.'],
        paragraphs: ['Diş eti hastalığı her zaman ağrı yapmaz. Şikâyet olmasa da düzenli muayene önemlidir.'],
        sources: ['gumAda'],
      },
      {
        id: 'surec', title: 'Tedavi nasıl planlanır?',
        paragraphs: ['Tedavi, hastalığın evresine göre belirlenir. Profesyonel temizlik ve kök yüzeylerinin temizlenmesi gibi cerrahi olmayan yöntemler kullanılabilir. İleri durumlarda cerrahi veya doku onarımına yönelik uygulamalar değerlendirilir. Tedavi yanıtı takip edilerek sonraki adımlar planlanır.'],
        sources: ['periodontics'],
      },
      {
        id: 'bakim', title: 'Günlük bakım ve düzenli kontrol',
        paragraphs: ['Dişlerin ve diş aralarının düzenli temizlenmesi tedavinin temel parçasıdır. Sigara kullanımı ve diyabet gibi durumlar diş eti sağlığını etkileyebilir. Profesyonel tedavi, evde bakımın yerini almaz; hastalığın tekrar etmesini önlemek için kişiye göre kontrol programı oluşturulur.'],
        sources: ['gumAda'],
      },
    ],
    faqs: [
      { question: 'Diş eti kanaması normal kabul edilmeli mi?', answer: 'Tekrarlayan kanama değerlendirilmelidir. Nedeni muayeneyle belirlenir; ağrı olmaması sağlıklı diş etleri anlamına gelmez.', sources: ['gumAda'] },
      { question: 'Her diş eti tedavisi ameliyat mı gerektirir?', answer: 'Hayır. Cerrahi olmayan tedaviler de vardır. Uygulama, hastalığın kapsamına ve tedavi yanıtına göre belirlenir.', sources: ['periodontics'] },
    ],
  },
  'cocuk-dis-hekimligi': {
    sections: [
      {
        id: 'nedir', title: 'Çocuk diş hekimliği nedir?',
        paragraphs: ['Çocuk diş hekimliği; süt ve daimi dişlerin sağlığını, ağız bakımını ve diş gelişiminin takibini kapsar. Amaç yalnızca mevcut sorunu tedavi etmek değil, çürük riskini azaltmak ve çocuğun diş bakımına alışmasına destek olmaktır.'],
        sources: ['childHabits'],
      },
      {
        id: 'degerlendirme', title: 'İlk muayene ne zaman yapılmalı?',
        paragraphs: ['ADA, ilk diş çıktıktan sonra ve en geç birinci doğum gününe kadar diş hekimi değerlendirmesi önerir. İlk muayenede dişler, çene gelişimi ve ağız içi kontrol edilir. Aileye günlük bakım ve alışkanlıklarla ilgili bilgi verilir.'],
        sources: ['firstVisit'],
      },
      {
        id: 'surec', title: 'Koruyucu yaklaşım',
        paragraphs: ['Koruyucu bakım, çocuğun yaşına ve çürük riskine göre planlanır. Florür uygulamaları ve uygun azı dişlerinde fissür örtücüler değerlendirilebilir. Fissür örtücü, çiğneme yüzeyindeki olukları örten koruyucu bir tabakadır; düzenli fırçalamanın veya kontrollerin yerine geçmez.'],
        sources: ['childHabits', 'sealants'],
      },
      {
        id: 'bakim', title: 'Ailenin bakımda rolü',
        paragraphs: ['Fırçalama ve diş arası temizliği çocuğun becerilerine göre aile desteğiyle sürdürülür. Şekerli yiyecek ve içeceklerin sık tüketimi azaltılmalıdır. Hekim, uygun ürün ve bakım yöntemini yaşa göre açıklar. Muayenelerin sakin ve olumlu anlatılması çocuğun yeni ortama alışmasına yardımcı olur.'],
        sources: ['childHabits', 'firstVisit'],
      },
    ],
    faqs: [
      { question: 'İlk diş muayenesi için ağrı beklenmeli mi?', answer: 'Hayır. İlk dişin sürmesini takiben erken kontrol önerilir; amaç gelişimi değerlendirmek ve bakım alışkanlıklarını desteklemektir.', sources: ['firstVisit'] },
      { question: 'Fissür örtücü yapılınca çürük riski tamamen biter mi?', answer: 'Hayır. Örtücüler koruyucu desteğin bir parçasıdır. Düzenli bakım, uygun beslenme ve hekim kontrolü yine gerekir.', sources: ['sealants'] },
    ],
  },
  'agiz-dis-ve-cene-cerrahisi': {
    sections: [
      {
        id: 'nedir', title: 'Ağız, diş ve çene cerrahisi nedir?',
        paragraphs: ['Bu alan; dişlerin, ağız dokularının ve çenelerin cerrahi değerlendirmesiyle ilgilenir. Diş çekimleri, gömülü dişler, implant yerleştirilmesi ve bazı kemik veya yumuşak doku işlemleri bu kapsamda yer alır. Gerekli uygulama ve uygun tedavi ortamı, işlemin kapsamına göre belirlenir.'],
        sources: ['surgery'],
      },
      {
        id: 'degerlendirme', title: 'Cerrahi karar nasıl verilir?',
        paragraphs: ['Muayene ve gerekli görüntülemelerle dişin konumu ve çevre dokular değerlendirilir. Özellikle yirmi yaş dişlerinde çekim kararı sorunlara ve bulgulara göre verilir. Her gömülü dişin otomatik olarak çekilmesi gerekmez.'],
        sources: ['wisdom'],
      },
      {
        id: 'surec', title: 'İşlem öncesi ve uygulama',
        paragraphs: ['Genel sağlık, ilaç kullanımı ve anestezi ihtiyacı değerlendirilir. İşleme göre lokal anestezi veya farklı anestezi seçenekleri planlanabilir. Cerrahinin türüne göre dikiş ve kontrol ihtiyacı değişir. Karmaşık uygulamalarda uzman değerlendirmesi veya uygun merkeze yönlendirme gerekebilir.'],
        sources: ['surgery'],
      },
      {
        id: 'bakim', title: 'İyileşme ve dikkat edilmesi gerekenler',
        paragraphs: ['İşlem sonrasında ağrı, şişlik veya geçici rahatsızlık oluşabilir. Hekimin kişiye özel beslenme, temizlik ve ilaç talimatları izlenmelidir. Enfeksiyon, kanama veya sinirlerin etkilenmesi gibi riskler işlem öncesinde konuşulur. Durmayan kanama, giderek artan şişlik veya ateşte gecikmeden sağlık değerlendirmesi alınmalıdır.'],
        sources: ['wisdom'],
      },
    ],
    faqs: [
      { question: 'Her yirmi yaş dişi çekilir mi?', answer: 'Hayır. Ağrı, enfeksiyon ve diğer sorunlar ile görüntüleme bulguları değerlendirilerek karar verilir.', sources: ['wisdom'] },
      { question: 'İyileşme süresi herkes için aynı mı?', answer: 'Hayır. İşlemin türü, kapsamı ve kişisel sağlık durumu iyileşmeyi etkiler. Hekiminiz size uygun takip planını açıklar.', sources: ['surgery'] },
    ],
  },
  'dis-protezleri': {
    sections: [
      {
        id: 'nedir', title: 'Diş protezi nedir?',
        paragraphs: ['Diş protezleri, eksik dişlerin yerine kullanılan yapılardır. Çiğneme, konuşma ve görünümü desteklemeyi amaçlar. Hareketli protezler çıkarılıp temizlenebilir; sabit köprüler ağızda kalır ve hekim tarafından çıkarılır. Uygun seçenek, eksikliğin kapsamına ve kalan dişlere göre değişir.'],
        sources: ['bridges', 'dentures'],
      },
      {
        id: 'degerlendirme', title: 'Protez seçenekleri',
        bullets: ['Bazı dişlerin eksikliğinde bölümlü hareketli protezler.', 'Bir çenedeki tüm dişlerin eksikliğinde tam protezler.', 'Uygun destek dişlerle sabit köprüler veya implant destekli yapılar.'],
        sources: ['dentures', 'bridges'],
      },
      {
        id: 'surec', title: 'Ölçü, hazırlık ve uyum',
        paragraphs: ['Ağız ve destek dokularının değerlendirilmesinden sonra ölçü veya tarama alınır. Hazırlanan protezin ağızdaki uyumu kontrol edilir. Yeni hareketli proteze alışmak zaman alabilir; basınç yapan veya gevşek kalan bölgeler için hekim ayarlaması gerekebilir.'],
        sources: ['dentures'],
      },
      {
        id: 'bakim', title: 'Temizlik ve kontroller',
        paragraphs: ['Hareketli protezler, hekimin önerdiği yöntemle ağız dışında temizlenir; kalan dişlerin ve diş etlerinin bakımı sürdürülür. Köprülerin destek dişleri de temiz ve sağlıklı tutulmalıdır. Protez ağrı yapıyor, kayıyor veya hasar görüyorsa hekim değerlendirmesi alınmalıdır.'],
        sources: ['dentures', 'bridges'],
      },
    ],
    faqs: [
      { question: 'Hareketli protez gece çıkarılmalı mı?', answer: 'Genellikle evet; hekiminiz farklı bir öneride bulunmadıkça gece çıkarılması önerilir. Saklama ve temizlik yöntemini hekiminiz açıklamalıdır.', sources: ['dentures'] },
      { question: 'Sabit köprü ile hareketli protez arasındaki fark nedir?', answer: 'Sabit köprü hasta tarafından çıkarılmaz. Hareketli protez ise çıkarılarak temizlenebilir. Destek yapıları ve kullanım biçimleri farklıdır.', sources: ['bridges'] },
    ],
  },
}
