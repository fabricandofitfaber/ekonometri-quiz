// Soru tipleri
export type QuestionType = 'open-ended' | 'multiple-choice';

export interface QuestionPart {
  id: string;
  question: string;
  type: QuestionType;
  options?: string[]; // Çoktan seçmeli için
  correctAnswer?: string | number; // Çoktan seçmeli için doğru cevap
  solution: string;
}

export interface Question {
  id: string;
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  title: string;
  context: string;
  model: string;
  additionalInfo?: string; // n, R² gibi ek bilgiler
  parts: QuestionPart[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  questions: Question[]; // 10 varyasyon
}

// ===========================================
// KATEGORİ 1: Hipotez Testi Yorumlama (Açık Uçlu)
// ===========================================
const category1Questions: Question[] = [
  {
    id: "1-1",
    difficulty: "Kolay",
    title: "Maaş Belirleyicileri",
    context: `Bir çalışanın aylık maaşının belirleyicilerini inceleyen model aşağıdaki gibidir. "maaş" aylık maaşı (TL), "tecrübe" iş tecrübesini (yıl), "eğitim" eğitim süresini (yıl), "yaş" ise çalışanın yaşını göstermektedir.`,
    model: `\\text{maaş} = \\beta_0 + \\beta_1 \\text{tecrübe} + \\beta_2 \\text{eğitim} + \\beta_3 \\text{yaş} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_2 = 0$ hipotezi ne anlama gelmektedir?`,
        type: 'open-ended',
        solution: `$H_0: \\beta_2 = 0$ hipotezi, tecrübe ve yaş sabitken, eğitim süresinin maaş üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder.`
      },
      {
        id: "b",
        question: `$t_{\\beta_2} > c$ ise, $\\beta_2$ için ne söylersiniz?`,
        type: 'open-ended',
        solution: `$t_{\\beta_2} > c$ ise, $H_0$ reddedilir. Eğitim süresinin maaş üzerinde istatistiksel olarak anlamlı ve pozitif bir etkisi vardır.`
      }
    ]
  },
  {
    id: "1-2",
    difficulty: "Kolay",
    title: "Ev Fiyatları",
    context: `Bir evin satış fiyatını etkileyen faktörleri inceleyen model aşağıdadır. "fiyat" satış fiyatını (bin TL), "bina_yasi" binanın yaşını (yıl), "kat" bulunduğu katı, "merkez" şehir merkezine uzaklığı (km) göstermektedir.`,
    model: `\\text{fiyat} = \\beta_0 + \\beta_1 \\text{bina\\_yasi} + \\beta_2 \\text{kat} + \\beta_3 \\text{merkez} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_3 = 0$ hipotezi ne anlama gelmektedir?`,
        type: 'open-ended',
        solution: `$H_0: \\beta_3 = 0$ hipotezi, bina yaşı ve kat sabitken, şehir merkezine uzaklığın ev fiyatı üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder.`
      },
      {
        id: "b",
        question: `$t_{\\beta_3} < -c$ ise, $\\beta_3$ için ne söylersiniz?`,
        type: 'open-ended',
        solution: `$t_{\\beta_3} < -c$ ise, $H_0$ reddedilir. Şehir merkezine uzaklığın ev fiyatı üzerinde istatistiksel olarak anlamlı ve negatif bir etkisi vardır (uzaklık arttıkça fiyat düşer).`
      }
    ]
  },
  {
    id: "1-3",
    difficulty: "Kolay",
    title: "Sınav Başarısı",
    context: `Öğrencilerin sınav başarısını etkileyen faktörleri inceleyen model aşağıdadır. "not" sınav notunu, "çalışma" haftalık çalışma saatini, "devam" derse devam oranını (%), "uyku" günlük uyku saatini göstermektedir.`,
    model: `\\text{not} = \\beta_0 + \\beta_1 \\text{çalışma} + \\beta_2 \\text{devam} + \\beta_3 \\text{uyku} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_1 = 0$ hipotezi ne anlama gelmektedir?`,
        type: 'open-ended',
        solution: `$H_0: \\beta_1 = 0$ hipotezi, devam oranı ve uyku saati sabitken, haftalık çalışma saatinin sınav notu üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder.`
      },
      {
        id: "b",
        question: `$|t_{\\beta_1}| > c$ ise, $\\beta_1$ için ne söylersiniz?`,
        type: 'open-ended',
        solution: `$|t_{\\beta_1}| > c$ ise, $H_0$ reddedilir. Haftalık çalışma saatinin sınav notu üzerinde istatistiksel olarak anlamlı bir etkisi vardır (iki yönlü test).`
      }
    ]
  },
  {
    id: "1-4",
    difficulty: "Orta",
    title: "İhracat Performansı",
    context: `Bir firmanın ihracat performansını inceleyen model aşağıdadır. "ihracat" ihracat değerini (milyon $), "kur" döviz kurunu, "verimlilik" işgücü verimliliğini, "enerji" enerji maliyetini göstermektedir.`,
    model: `\\log(\\text{ihracat}) = \\beta_0 + \\beta_1 \\text{kur} + \\beta_2 \\text{verimlilik} + \\beta_3 \\text{enerji} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_1 = 0$ hipotezi ne anlama gelmektedir? Modelin fonksiyonel formunu da dikkate alarak yorumlayınız.`,
        type: 'open-ended',
        solution: `$H_0: \\beta_1 = 0$ hipotezi, verimlilik ve enerji maliyeti sabitken, döviz kurunun ihracat üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder. Model log-lineer olduğundan, kurdaki bir birimlik değişim ihracatta $\\beta_1 \\times 100$ yüzdelik değişime yol açar.`
      },
      {
        id: "b",
        question: `$t_{\\beta_1} > c$ ise, $\\beta_1$ için ne söylersiniz?`,
        type: 'open-ended',
        solution: `$t_{\\beta_1} > c$ ise, $H_0$ reddedilir. Döviz kurunun ihracat üzerinde istatistiksel olarak anlamlı ve pozitif bir etkisi vardır.`
      }
    ]
  },
  {
    id: "1-5",
    difficulty: "Orta",
    title: "Tarımsal Verim",
    context: `Tarımsal verimi etkileyen faktörleri inceleyen model aşağıdadır. "verim" hektar başına verimi (ton), "gübre" gübre kullanımını (kg/hektar), "sulama" sulama miktarını (m³), "tohum" tohum kalite endeksini göstermektedir.`,
    model: `\\log(\\text{verim}) = \\beta_0 + \\beta_1 \\log(\\text{gübre}) + \\beta_2 \\log(\\text{sulama}) + \\beta_3 \\text{tohum} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_1 = 0$ hipotezi ne anlama gelmektedir? Modelin fonksiyonel formunu da dikkate alarak yorumlayınız.`,
        type: 'open-ended',
        solution: `$H_0: \\beta_1 = 0$ hipotezi, sulama ve tohum kalitesi sabitken, gübre kullanımının tarımsal verim üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder. Model log-log formunda olduğundan, $\\beta_1$ gübre kullanımının verim esnekliğini gösterir (gübredeki %1'lik artış verimde %$\\beta_1$'lik değişime yol açar).`
      },
      {
        id: "b",
        question: `$t_{\\beta_1} > c$ ise, $\\beta_1$ için ne söylersiniz?`,
        type: 'open-ended',
        solution: `$t_{\\beta_1} > c$ ise, $H_0$ reddedilir. Gübre kullanımının verim üzerinde istatistiksel olarak anlamlı ve pozitif bir etkisi vardır.`
      }
    ]
  },
  {
    id: "1-6",
    difficulty: "Orta",
    title: "Kredi Temerrüt Oranı",
    context: `Bir bankanın kredi temerrüt oranını inceleyen model aşağıdadır. "temerrüt" temerrüt oranını (%), "faiz" faiz oranını, "gelir" ortalama müşteri gelirini (bin TL), "kredi_skoru" ortalama kredi skorunu göstermektedir.`,
    model: `\\text{temerrüt} = \\beta_0 + \\beta_1 \\text{faiz} + \\beta_2 \\text{gelir} + \\beta_3 \\text{kredi\\_skoru} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_2 = 0$ hipotezi ne anlama gelmektedir?`,
        type: 'open-ended',
        solution: `$H_0: \\beta_2 = 0$ hipotezi, faiz oranı ve kredi skoru sabitken, müşteri gelirinin temerrüt oranı üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder.`
      },
      {
        id: "b",
        question: `$t_{\\beta_2} < -c$ ise, $\\beta_2$ için ne söylersiniz? Ekonomik olarak bu sonucu yorumlayınız.`,
        type: 'open-ended',
        solution: `$t_{\\beta_2} < -c$ ise, $H_0$ reddedilir. Müşteri gelirinin temerrüt oranı üzerinde istatistiksel olarak anlamlı ve negatif bir etkisi vardır. Ekonomik olarak, gelir arttıkça müşterilerin kredilerini geri ödeme kapasitesi artar ve temerrüt oranı düşer.`
      }
    ]
  },
  {
    id: "1-7",
    difficulty: "Orta",
    title: "Hava Kirliliği",
    context: `Bir şehirdeki hava kirliliğini inceleyen model aşağıdadır. "PM10" partikül madde yoğunluğunu (µg/m³), "trafik" trafik yoğunluğu endeksini, "sanayi" sanayi üretim endeksini, "yeşil" kişi başı yeşil alan miktarını (m²) göstermektedir.`,
    model: `\\text{PM10} = \\beta_0 + \\beta_1 \\text{trafik} + \\beta_2 \\text{sanayi} + \\beta_3 \\text{yeşil} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_3 = 0$ hipotezi ne anlama gelmektedir?`,
        type: 'open-ended',
        solution: `$H_0: \\beta_3 = 0$ hipotezi, trafik ve sanayi üretimi sabitken, yeşil alan miktarının hava kirliliği üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder.`
      },
      {
        id: "b",
        question: `$t_{\\beta_3} < -c$ ise, $\\beta_3$ için ne söylersiniz? Çevre politikası açısından bu bulgunun önemi nedir?`,
        type: 'open-ended',
        solution: `$t_{\\beta_3} < -c$ ise, $H_0$ reddedilir. Yeşil alan miktarının hava kirliliği üzerinde istatistiksel olarak anlamlı ve negatif bir etkisi vardır. Çevre politikası açısından, yeşil alanların artırılmasının hava kalitesini iyileştirmede etkili bir araç olduğu sonucuna varılır.`
      }
    ]
  },
  {
    id: "1-8",
    difficulty: "Zor",
    title: "Ekonomik Büyüme",
    context: `Bir ülkenin ekonomik büyümesini inceleyen model aşağıdadır. "büyüme" GSYİH büyüme oranını (%), "yatırım" yatırım/GSYİH oranını, "eğitim" ortalama eğitim yılını, "açıklık" ticari açıklık endeksini göstermektedir.`,
    model: `\\text{büyüme} = \\beta_0 + \\beta_1 \\text{yatırım} + \\beta_2 \\text{eğitim} + \\beta_3 \\text{açıklık} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_1 = 0$ ve $H_0: \\beta_2 = 0$ hipotezlerini ayrı ayrı yorumlayınız.`,
        type: 'open-ended',
        solution: `$H_0: \\beta_1 = 0$: Eğitim ve ticari açıklık sabitken, yatırım oranının ekonomik büyüme üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder.\n\n$H_0: \\beta_2 = 0$: Yatırım ve ticari açıklık sabitken, eğitim düzeyinin ekonomik büyüme üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder.`
      },
      {
        id: "b",
        question: `Her iki hipotez için de $|t| > c$ bulunmuşsa, politika yapıcılara ne önerirsiniz?`,
        type: 'open-ended',
        solution: `Her iki hipotez de reddedildiğinden, hem yatırımların hem de eğitimin ekonomik büyüme üzerinde anlamlı etkileri vardır. Politika yapıcılara hem fiziksel sermaye yatırımlarını teşvik etmeleri hem de beşeri sermayeyi geliştirmek için eğitime yatırım yapmaları önerilir.`
      }
    ]
  },
  {
    id: "1-9",
    difficulty: "Zor",
    title: "E-Ticaret Satışları",
    context: `Bir e-ticaret sitesinin satışlarını inceleyen model aşağıdadır. "satış" günlük satış tutarını (bin TL), "ziyaretçi" günlük ziyaretçi sayısını, "reklam" reklam harcamasını (TL), "indirim" ortalama indirim oranını (%) göstermektedir.`,
    model: `\\log(\\text{satış}) = \\beta_0 + \\beta_1 \\log(\\text{ziyaretçi}) + \\beta_2 \\log(\\text{reklam}) + \\beta_3 \\text{indirim} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_1 = 1$ hipotezi ne anlama gelmektedir? (Dikkat: $\\beta_1 = 0$ değil!)`,
        type: 'open-ended',
        solution: `$H_0: \\beta_1 = 1$ hipotezi, ziyaretçi sayısındaki yüzdesel değişimin satışlarda birebir aynı oranda yüzdesel değişime yol açtığını (birim esneklik) ifade eder. Yani ziyaretçi sayısı %1 artarsa satışlar da tam olarak %1 artar.`
      },
      {
        id: "b",
        question: `$t = \\frac{\\hat{\\beta}_1 - 1}{se(\\hat{\\beta}_1)} > c$ ise ne söylersiniz?`,
        type: 'open-ended',
        solution: `$t > c$ ise, $H_0$ reddedilir. Ziyaretçi esnekliği 1'den farklıdır. Eğer $\\hat{\\beta}_1 > 1$ ise ziyaretçi artışı satışları oransal olarak daha fazla artırır (ölçeğe göre artan getiri), $\\hat{\\beta}_1 < 1$ ise daha az artırır (ölçeğe göre azalan getiri).`
      }
    ]
  },
  {
    id: "1-10",
    difficulty: "Zor",
    title: "Hastane Maliyetleri",
    context: `Bir hastanede tedavi maliyetlerini inceleyen model aşağıdadır. "maliyet" tedavi maliyetini (TL), "gün" yatış süresini, "yaş" hasta yaşını, "kronik" kronik hastalık sayısını göstermektedir.`,
    model: `\\log(\\text{maliyet}) = \\beta_0 + \\beta_1 \\text{gün} + \\beta_2 \\text{yaş} + \\beta_3 \\text{kronik} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_2 = \\beta_3$ hipotezi ne anlama gelmektedir?`,
        type: 'open-ended',
        solution: `$H_0: \\beta_2 = \\beta_3$ hipotezi, yaştaki bir birimlik artışın maliyet üzerindeki yüzdesel etkisinin, kronik hastalık sayısındaki bir birimlik artışın etkisine eşit olduğunu ifade eder. Yani yaş ve kronik hastalık sayısının maliyet üzerindeki marjinal etkileri aynıdır.`
      },
      {
        id: "b",
        question: `Bu hipotezi test etmek için nasıl bir t-istatistiği oluşturulur?`,
        type: 'open-ended',
        solution: `t-istatistiği şu şekilde oluşturulur:\n$$t = \\frac{\\hat{\\beta}_2 - \\hat{\\beta}_3}{se(\\hat{\\beta}_2 - \\hat{\\beta}_3)}$$\n\nPaydadaki standart hata: $se(\\hat{\\beta}_2 - \\hat{\\beta}_3) = \\sqrt{Var(\\hat{\\beta}_2) + Var(\\hat{\\beta}_3) - 2Cov(\\hat{\\beta}_2, \\hat{\\beta}_3)}$`
      }
    ]
  }
];

// ===========================================
// KATEGORİ 2: t-Testi Hesaplama (Çoktan Seçmeli)
// ===========================================
const category2Questions: Question[] = [
  {
    id: "2-1",
    difficulty: "Orta",
    title: "GANO Modeli - Üniversite",
    context: `Üniversite genel not ortalamasının (GANO) öngörüsü için tahmin edilmiş model aşağıdaki gibidir. Modelde "ekonsaat", öğrencinin Ekonometrik Analiz 2 dersi için harcamış olduğu toplam çalışma saatini, "videosaat", öğrencinin bilgisayardan video izlemek için harcadığı haftalık ortalama saati, "log(liseMO)" ise, öğrencinin lise mezuniyet ortalamasını göstermektedir.`,
    model: `\\widehat{GANO} = \\underset{(0.075)}{1.292} + \\underset{(0.007)}{0.014} \\text{ekonsaat} - \\underset{(0.0052)}{0.013} \\text{videosaat} + \\underset{(0.07)}{0.21} \\log(\\text{liseMO})`,
    additionalInfo: `n = 33, \\quad R^2 = 0.278`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{ekonsaat}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['1', '2', '3', '4'],
        correctAnswer: '2',
        solution: `$t_{ekonsaat} = \\frac{\\hat{\\beta}_{ekonsaat}}{se(\\hat{\\beta}_{ekonsaat})} = \\frac{0.014}{0.007} = 2$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['29', '30', '32', '33'],
        correctAnswer: '29',
        solution: `Serbestlik derecesi = $n - k - 1 = 33 - 3 - 1 = 29$ (n: gözlem sayısı, k: bağımsız değişken sayısı)`
      },
      {
        id: "c",
        question: `Bu model için çift yönlü testte, anlamlılık düzeyi $\\alpha = 0.05$ için kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['1.64', '1.96', '2.04', '2.45'],
        correctAnswer: '2.04',
        solution: `Çift yönlü test için $\\alpha = 0.05$ ve serbestlik derecesi 29 ile $t_{kritik} \\approx 2.04$ (t-tablosundan)`
      },
      {
        id: "d",
        question: `Bu modelde çift yönlü testte anlamlılık düzeyi $\\alpha = 0.05$ için $H_0: \\beta_{ekonsaat} = 0$'ı $H_1: \\beta_{ekonsaat} \\neq 0$ hipotezi lehine reddedersek ne söyleyebiliriz?`,
        type: 'multiple-choice',
        options: [
          'Ekonsaat ile GANO arasında istatistiksel olarak anlamlı bir ilişki yoktur',
          'Ekonsaat ile GANO arasında istatistiksel olarak anlamlı bir ilişki vardır',
          'Yorum yapılamaz',
          'Daha fazla veriye ihtiyaç var'
        ],
        correctAnswer: 'Ekonsaat ile GANO arasında istatistiksel olarak anlamlı bir ilişki vardır',
        solution: `$|t_{ekonsaat}| = 2 < 2.04 = t_{kritik}$ olduğundan $H_0$ reddedilemez. Ancak soruda "reddedersek" dendiği için, eğer $H_0$ reddedilirse ekonsaat ile GANO arasında istatistiksel olarak anlamlı bir ilişki bulunmaktadır.`
      }
    ]
  },
  {
    id: "2-2",
    difficulty: "Orta",
    title: "Maaş Modeli - İşletme",
    context: `Çalışan maaşlarının öngörüsü için tahmin edilmiş model aşağıdaki gibidir. Modelde "tecrübe", çalışanın toplam iş tecrübesini (yıl), "eğitim", çalışanın eğitim süresini (yıl), "log(yaş)" ise çalışanın yaşının logaritmasını göstermektedir.`,
    model: `\\widehat{\\text{maaş}} = \\underset{(420)}{2850} + \\underset{(37)}{185} \\text{tecrübe} + \\underset{(80)}{320} \\text{eğitim} + \\underset{(312.5)}{1250} \\log(\\text{yaş})`,
    additionalInfo: `n = 48, \\quad R^2 = 0.412`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{tecrübe}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['3', '4', '5', '6'],
        correctAnswer: '5',
        solution: `$t_{tecrübe} = \\frac{\\hat{\\beta}_{tecrübe}}{se(\\hat{\\beta}_{tecrübe})} = \\frac{185}{37} = 5$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['43', '44', '45', '47'],
        correctAnswer: '44',
        solution: `Serbestlik derecesi = $n - k - 1 = 48 - 3 - 1 = 44$`
      },
      {
        id: "c",
        question: `Bu model için çift yönlü testte, anlamlılık düzeyi $\\alpha = 0.05$ için kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['1.68', '2.01', '2.02', '2.42'],
        correctAnswer: '2.02',
        solution: `Çift yönlü test için $\\alpha = 0.05$ ve serbestlik derecesi 44 ile $t_{kritik} \\approx 2.02$`
      },
      {
        id: "d",
        question: `Bu modelde $\\alpha = 0.05$ için tecrübe değişkeni istatistiksel olarak anlamlı mıdır?`,
        type: 'multiple-choice',
        options: [
          'Evet, çünkü |t| > kritik değer',
          'Hayır, çünkü |t| < kritik değer',
          'Evet, çünkü |t| < kritik değer',
          'Yorum yapılamaz'
        ],
        correctAnswer: 'Evet, çünkü |t| > kritik değer',
        solution: `$|t_{tecrübe}| = 5 > 2.02 = t_{kritik}$ olduğundan $H_0$ reddedilir. Tecrübe, maaş üzerinde istatistiksel olarak anlamlı bir etkiye sahiptir.`
      }
    ]
  },
  {
    id: "2-3",
    difficulty: "Kolay",
    title: "Satış Modeli - Perakende",
    context: `Mağaza satışlarının öngörüsü için tahmin edilmiş model aşağıdaki gibidir. Modelde "reklam", aylık reklam harcamasını (bin TL), "personel", çalışan sayısını, "konum" ise merkeze uzaklığı (km) göstermektedir.`,
    model: `\\widehat{\\text{satış}} = \\underset{(12)}{45} + \\underset{(1.2)}{3.6} \\text{reklam} + \\underset{(0.7)}{2.1} \\text{personel} - \\underset{(0.6)}{1.8} \\text{konum}`,
    additionalInfo: `n = 28, \\quad R^2 = 0.523`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{reklam}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '3',
        solution: `$t_{reklam} = \\frac{\\hat{\\beta}_{reklam}}{se(\\hat{\\beta}_{reklam})} = \\frac{3.6}{1.2} = 3$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['23', '24', '25', '27'],
        correctAnswer: '24',
        solution: `Serbestlik derecesi = $n - k - 1 = 28 - 3 - 1 = 24$`
      },
      {
        id: "c",
        question: `Bu model için çift yönlü testte, anlamlılık düzeyi $\\alpha = 0.05$ için kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['1.71', '2.06', '2.49', '2.80'],
        correctAnswer: '2.06',
        solution: `Çift yönlü test için $\\alpha = 0.05$ ve serbestlik derecesi 24 ile $t_{kritik} \\approx 2.06$`
      },
      {
        id: "d",
        question: `Konum değişkeninin katsayısı negatiftir. Bu ne anlama gelir?`,
        type: 'multiple-choice',
        options: [
          'Merkeze uzaklık arttıkça satışlar azalır',
          'Merkeze uzaklık arttıkça satışlar artar',
          'Konum satışları etkilemez',
          'Yorum yapılamaz'
        ],
        correctAnswer: 'Merkeze uzaklık arttıkça satışlar azalır',
        solution: `Konum katsayısı $-1.8 < 0$ olduğundan, merkeze uzaklık 1 km arttığında satışlar ortalama 1.8 bin TL azalır.`
      }
    ]
  },
  {
    id: "2-4",
    difficulty: "Kolay",
    title: "Verimlilik Modeli - Üretim",
    context: `Fabrika verimliliğinin öngörüsü için tahmin edilmiş model aşağıdaki gibidir. Modelde "makine", makine sayısını, "işçi", işçi sayısını, "enerji" ise enerji tüketimini (kWh) göstermektedir.`,
    model: `\\widehat{\\text{verim}} = \\underset{(25)}{120} + \\underset{(2.1)}{8.4} \\text{makine} + \\underset{(0.7)}{2.8} \\text{işçi} + \\underset{(0.07)}{0.14} \\text{enerji}`,
    additionalInfo: `n = 42, \\quad R^2 = 0.645`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{makine}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
        solution: `$t_{makine} = \\frac{\\hat{\\beta}_{makine}}{se(\\hat{\\beta}_{makine})} = \\frac{8.4}{2.1} = 4$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['37', '38', '39', '41'],
        correctAnswer: '38',
        solution: `Serbestlik derecesi = $n - k - 1 = 42 - 3 - 1 = 38$`
      },
      {
        id: "c",
        question: `Bu model için çift yönlü testte, anlamlılık düzeyi $\\alpha = 0.01$ için kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['2.02', '2.42', '2.71', '3.50'],
        correctAnswer: '2.71',
        solution: `Çift yönlü test için $\\alpha = 0.01$ ve serbestlik derecesi 38 ile $t_{kritik} \\approx 2.71$`
      },
      {
        id: "d",
        question: `Makine değişkeni $\\alpha = 0.01$ düzeyinde anlamlı mıdır?`,
        type: 'multiple-choice',
        options: [
          'Evet, çünkü |t| > kritik değer',
          'Hayır, çünkü |t| < kritik değer',
          'Evet, çünkü R² yüksek',
          'Hayır, çünkü R² düşük'
        ],
        correctAnswer: 'Evet, çünkü |t| > kritik değer',
        solution: `$|t_{makine}| = 4 > 2.71 = t_{kritik}$ olduğundan $H_0$ reddedilir. Makine sayısı verimlilik üzerinde istatistiksel olarak anlamlıdır.`
      }
    ]
  },
  {
    id: "2-5",
    difficulty: "Orta",
    title: "Tüketim Modeli - Hanehalkı",
    context: `Hanehalkı tüketim harcamalarının öngörüsü için tahmin edilmiş model aşağıdaki gibidir. Modelde "gelir", aylık geliri (bin TL), "fert", hanedeki fert sayısını, "log(tasarruf)" ise tasarruf miktarının logaritmasını göstermektedir.`,
    model: `\\widehat{\\text{tüketim}} = \\underset{(0.42)}{1.85} + \\underset{(0.12)}{0.72} \\text{gelir} + \\underset{(0.15)}{0.45} \\text{fert} - \\underset{(0.06)}{0.18} \\log(\\text{tasarruf})`,
    additionalInfo: `n = 56, \\quad R^2 = 0.712`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{gelir}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['4', '5', '6', '7'],
        correctAnswer: '6',
        solution: `$t_{gelir} = \\frac{\\hat{\\beta}_{gelir}}{se(\\hat{\\beta}_{gelir})} = \\frac{0.72}{0.12} = 6$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['51', '52', '53', '55'],
        correctAnswer: '52',
        solution: `Serbestlik derecesi = $n - k - 1 = 56 - 3 - 1 = 52$`
      },
      {
        id: "c",
        question: `Bu model için çift yönlü testte, anlamlılık düzeyi $\\alpha = 0.05$ için kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['1.68', '2.01', '2.40', '2.67'],
        correctAnswer: '2.01',
        solution: `Çift yönlü test için $\\alpha = 0.05$ ve serbestlik derecesi 52 ile $t_{kritik} \\approx 2.01$`
      },
      {
        id: "d",
        question: `log(tasarruf) katsayısının işareti ne anlama gelir?`,
        type: 'multiple-choice',
        options: [
          'Tasarruf arttıkça tüketim azalır',
          'Tasarruf arttıkça tüketim artar',
          'Tasarruf ve tüketim arasında ilişki yok',
          'Model yanlış kurulmuş'
        ],
        correctAnswer: 'Tasarruf arttıkça tüketim azalır',
        solution: `log(tasarruf) katsayısı $-0.18 < 0$ olduğundan, tasarruf arttıkça tüketim harcamaları azalır. Bu ekonomik teoriyle tutarlıdır.`
      }
    ]
  },
  {
    id: "2-6",
    difficulty: "Zor",
    title: "Yatırım Modeli - Finans",
    context: `Şirket yatırımlarının öngörüsü için tahmin edilmiş model aşağıdaki gibidir. Modelde "nakit", nakit akışını (milyon TL), "borç", borç oranını (%), "log(aktif)" ise toplam aktiflerin logaritmasını göstermektedir.`,
    model: `\\widehat{\\text{yatırım}} = \\underset{(1.12)}{-2.35} + \\underset{(0.04)}{0.28} \\text{nakit} - \\underset{(0.015)}{0.045} \\text{borç} + \\underset{(0.37)}{1.85} \\log(\\text{aktif})`,
    additionalInfo: `n = 65, \\quad R^2 = 0.534`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{nakit}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['5', '6', '7', '8'],
        correctAnswer: '7',
        solution: `$t_{nakit} = \\frac{\\hat{\\beta}_{nakit}}{se(\\hat{\\beta}_{nakit})} = \\frac{0.28}{0.04} = 7$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['60', '61', '62', '64'],
        correctAnswer: '61',
        solution: `Serbestlik derecesi = $n - k - 1 = 65 - 3 - 1 = 61$`
      },
      {
        id: "c",
        question: `Bu model için çift yönlü testte, anlamlılık düzeyi $\\alpha = 0.01$ için kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['2.00', '2.39', '2.66', '3.46'],
        correctAnswer: '2.66',
        solution: `Çift yönlü test için $\\alpha = 0.01$ ve serbestlik derecesi 61 ile $t_{kritik} \\approx 2.66$`
      },
      {
        id: "d",
        question: `Borç oranı değişkeni $\\alpha = 0.01$ düzeyinde anlamlı mıdır?`,
        type: 'multiple-choice',
        options: [
          'Evet, |t| = 3 > 2.66',
          'Hayır, |t| = 3 < 2.66',
          'Evet, |t| = 3 > 2.00',
          'Yorum yapılamaz'
        ],
        correctAnswer: 'Evet, |t| = 3 > 2.66',
        solution: `$|t_{borç}| = \\frac{0.045}{0.015} = 3 > 2.66 = t_{kritik}$ olduğundan borç oranı $\\alpha = 0.01$ düzeyinde istatistiksel olarak anlamlıdır.`
      }
    ]
  },
  {
    id: "2-7",
    difficulty: "Zor",
    title: "İhracat Modeli - Dış Ticaret",
    context: `Firma ihracatının öngörüsü için tahmin edilmiş model aşağıdaki gibidir. Modelde "kur", döviz kurunu, "kapasite", üretim kapasitesi kullanım oranını (%), "log(ArGe)" ise Ar-Ge harcamalarının logaritmasını göstermektedir.`,
    model: `\\log(\\widehat{\\text{ihracat}}) = \\underset{(0.85)}{2.15} + \\underset{(0.08)}{0.32} \\text{kur} + \\underset{(0.008)}{0.024} \\text{kapasite} + \\underset{(0.12)}{0.48} \\log(\\text{ArGe})`,
    additionalInfo: `n = 72, \\quad R^2 = 0.623`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{kur}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
        solution: `$t_{kur} = \\frac{\\hat{\\beta}_{kur}}{se(\\hat{\\beta}_{kur})} = \\frac{0.32}{0.08} = 4$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['67', '68', '69', '71'],
        correctAnswer: '68',
        solution: `Serbestlik derecesi = $n - k - 1 = 72 - 3 - 1 = 68$`
      },
      {
        id: "c",
        question: `log(ArGe) katsayısı (0.48) nasıl yorumlanır?`,
        type: 'multiple-choice',
        options: [
          'Ar-Ge %1 artarsa ihracat %0.48 artar',
          'Ar-Ge 1 birim artarsa ihracat %48 artar',
          'Ar-Ge 1 birim artarsa ihracat 0.48 birim artar',
          'Ar-Ge %1 artarsa ihracat 0.48 birim artar'
        ],
        correctAnswer: 'Ar-Ge %1 artarsa ihracat %0.48 artar',
        solution: `Model log-log formunda olduğundan (bağımlı değişken log, bağımsız değişken de log), katsayı esnekliği gösterir. Ar-Ge harcamaları %1 arttığında ihracat %0.48 artar.`
      },
      {
        id: "d",
        question: `Kapasite değişkeni $\\alpha = 0.05$ düzeyinde anlamlı mıdır?`,
        type: 'multiple-choice',
        options: [
          'Evet, |t| = 3 > 2.00',
          'Hayır, |t| = 3 < 2.00',
          'Evet, |t| = 2.4 > 2.00',
          'Hayır, |t| = 2.4 < 2.00'
        ],
        correctAnswer: 'Evet, |t| = 3 > 2.00',
        solution: `$|t_{kapasite}| = \\frac{0.024}{0.008} = 3 > 2.00 = t_{kritik}$ olduğundan kapasite değişkeni istatistiksel olarak anlamlıdır.`
      }
    ]
  },
  {
    id: "2-8",
    difficulty: "Kolay",
    title: "Kira Modeli - Emlak",
    context: `Daire kiralarının öngörüsü için tahmin edilmiş model aşağıdaki gibidir. Modelde "alan", daire alanını (m²), "kat", bulunduğu katı, "bina_yaşı" ise binanın yaşını göstermektedir.`,
    model: `\\widehat{\\text{kira}} = \\underset{(185)}{850} + \\underset{(8)}{32} \\text{alan} + \\underset{(22.5)}{45} \\text{kat} - \\underset{(7)}{28} \\text{bina\\_yaşı}`,
    additionalInfo: `n = 38, \\quad R^2 = 0.687`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{alan}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
        solution: `$t_{alan} = \\frac{\\hat{\\beta}_{alan}}{se(\\hat{\\beta}_{alan})} = \\frac{32}{8} = 4$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['33', '34', '35', '37'],
        correctAnswer: '34',
        solution: `Serbestlik derecesi = $n - k - 1 = 38 - 3 - 1 = 34$`
      },
      {
        id: "c",
        question: `Kat değişkeni için $|t|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['1.5', '2', '2.5', '3'],
        correctAnswer: '2',
        solution: `$|t_{kat}| = \\frac{45}{22.5} = 2$`
      },
      {
        id: "d",
        question: `Bina yaşının katsayısı negatiftir. Bu ne anlama gelir?`,
        type: 'multiple-choice',
        options: [
          'Bina yaşlandıkça kira düşer',
          'Bina yaşlandıkça kira artar',
          'Bina yaşı kirayı etkilemez',
          'Model hatalı'
        ],
        correctAnswer: 'Bina yaşlandıkça kira düşer',
        solution: `Bina yaşı katsayısı $-28 < 0$ olduğundan, bina yaşı 1 yıl arttığında kira ortalama 28 TL düşer.`
      }
    ]
  },
  {
    id: "2-9",
    difficulty: "Zor",
    title: "Büyüme Modeli - Makroekonomi",
    context: `Ülke ekonomik büyümesinin öngörüsü için tahmin edilmiş model aşağıdaki gibidir. Modelde "yatırım", yatırım/GSYİH oranını (%), "enflasyon", enflasyon oranını (%), "log(nüfus)" ise nüfusun logaritmasını göstermektedir.`,
    model: `\\widehat{\\text{büyüme}} = \\underset{(1.25)}{3.42} + \\underset{(0.03)}{0.18} \\text{yatırım} - \\underset{(0.04)}{0.12} \\text{enflasyon} + \\underset{(0.17)}{0.85} \\log(\\text{nüfus})`,
    additionalInfo: `n = 85, \\quad R^2 = 0.478`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{yatırım}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['4', '5', '6', '7'],
        correctAnswer: '6',
        solution: `$t_{yatırım} = \\frac{\\hat{\\beta}_{yatırım}}{se(\\hat{\\beta}_{yatırım})} = \\frac{0.18}{0.03} = 6$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['80', '81', '82', '84'],
        correctAnswer: '81',
        solution: `Serbestlik derecesi = $n - k - 1 = 85 - 3 - 1 = 81$`
      },
      {
        id: "c",
        question: `Enflasyon değişkeni için $|t|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '3',
        solution: `$|t_{enflasyon}| = \\frac{0.12}{0.04} = 3$`
      },
      {
        id: "d",
        question: `Enflasyonun büyüme üzerindeki etkisi nasıldır?`,
        type: 'multiple-choice',
        options: [
          'Negatif ve istatistiksel olarak anlamlı',
          'Pozitif ve istatistiksel olarak anlamlı',
          'Negatif ama anlamsız',
          'Pozitif ama anlamsız'
        ],
        correctAnswer: 'Negatif ve istatistiksel olarak anlamlı',
        solution: `Enflasyon katsayısı $-0.12 < 0$ (negatif) ve $|t| = 3 > 2$ (anlamlı). Enflasyon arttıkça ekonomik büyüme azalır ve bu ilişki istatistiksel olarak anlamlıdır.`
      }
    ]
  },
  {
    id: "2-10",
    difficulty: "Orta",
    title: "Sağlık Modeli - Hastane",
    context: `Hasta kalış süresinin öngörüsü için tahmin edilmiş model aşağıdaki gibidir. Modelde "yaş", hasta yaşını, "kronik", kronik hastalık sayısını, "ameliyat" ise ameliyat olup olmadığını (1=evet, 0=hayır) göstermektedir.`,
    model: `\\widehat{\\text{gün}} = \\underset{(0.45)}{1.2} + \\underset{(0.02)}{0.08} \\text{yaş} + \\underset{(0.375)}{1.5} \\text{kronik} + \\underset{(0.8)}{3.2} \\text{ameliyat}`,
    additionalInfo: `n = 120, \\quad R^2 = 0.562`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{yaş}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
        solution: `$t_{yaş} = \\frac{\\hat{\\beta}_{yaş}}{se(\\hat{\\beta}_{yaş})} = \\frac{0.08}{0.02} = 4$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['115', '116', '117', '119'],
        correctAnswer: '116',
        solution: `Serbestlik derecesi = $n - k - 1 = 120 - 3 - 1 = 116$`
      },
      {
        id: "c",
        question: `Ameliyat değişkeninin katsayısı (3.2) nasıl yorumlanır?`,
        type: 'multiple-choice',
        options: [
          'Ameliyat olan hastalar ortalama 3.2 gün daha fazla kalır',
          'Her ameliyat kalış süresini 3.2 kat artırır',
          'Ameliyat olmayanlar 3.2 gün kalır',
          'Ameliyat olma olasılığı %3.2 artar'
        ],
        correctAnswer: 'Ameliyat olan hastalar ortalama 3.2 gün daha fazla kalır',
        solution: `Ameliyat kukla değişken (0/1) olduğundan, katsayı ameliyat olan ve olmayan hastalar arasındaki ortalama farkı gösterir. Ameliyat olanlar ortalama 3.2 gün daha fazla kalır.`
      },
      {
        id: "d",
        question: `Kronik hastalık değişkeni için $|t|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
        solution: `$|t_{kronik}| = \\frac{1.5}{0.375} = 4$`
      }
    ]
  }
];

// ===========================================
// KATEGORİ 3: Güven Aralığı ve Hipotez Testi (Boşluk Doldurma + Çoktan Seçmeli)
// ===========================================
const category3Questions: Question[] = [
  {
    id: "3-1",
    difficulty: "Orta",
    title: "Ev Fiyatı Modeli - Emlak",
    context: `Ev fiyatını (fiyat), arsa büyüklüğü (arsa), evin $m^2$ cinsinden büyüklüğü (alan), yatak odası sayısı (yatakodası) ve bina yaşı (yaş) ile açıklayan ekonometrik model aşağıdaki gibidir.`,
    model: `\\widehat{fiyat} = \\underset{(0.099)}{-10.65} + \\underset{(0.041)}{0.164} \\log(arsa) + \\underset{(0.62)}{0.93} \\log(alan) + \\underset{(0.025)}{0.05} (yatakodası) - \\underset{(0.001)}{0.02} (yaş)`,
    additionalInfo: `n = 1680, \\quad R^2 = 0.642`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{\\log(arsa)}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
        solution: `$t_{\\log(arsa)} = \\frac{\\hat{\\beta}_{\\log(arsa)}}{se(\\hat{\\beta}_{\\log(arsa)})} = \\frac{0.164}{0.041} = 4$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['1674', '1675', '1676', '1679'],
        correctAnswer: '1675',
        solution: `Serbestlik derecesi = $n - k - 1 = 1680 - 4 - 1 = 1675$`
      },
      {
        id: "c",
        question: `Bu model için çift yönlü testte, anlamlılık düzeyi $\\alpha = 0.05$ için kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['1.64', '1.96', '2.00', '2.58'],
        correctAnswer: '1.96',
        solution: `Serbestlik derecesi 1675 olduğundan (yeterince büyük), $t_{kritik} \\approx z_{kritik} = 1.96$`
      },
      {
        id: "d",
        question: `$\\beta_{\\log(arsa)}$ için %95 güven aralığının alt ve üst sınırlarını hesaplayınız.`,
        type: 'open-ended',
        solution: `Güven aralığı formülü: $\\hat{\\beta} \\pm t_{kritik} \\times se(\\hat{\\beta})$\n\nAlt sınır = $0.164 - 1.96 \\times 0.041 = 0.164 - 0.080 = 0.084$\nÜst sınır = $0.164 + 1.96 \\times 0.041 = 0.164 + 0.080 = 0.244$\n\n**Güven Aralığı: [0.084, 0.244]**`
      },
      {
        id: "e",
        question: `Bu modelde çift yönlü testte anlamlılık düzeyi $\\alpha = 0.05$ için $H_0: \\beta_{\\log(arsa)} = 0$ hipotezi ________. Buna göre log(arsa) ile fiyat arasında istatistiksel olarak anlamlı bir ilişki ________.`,
        type: 'multiple-choice',
        options: [
          'reddedilmektedir / bulunmaktadır',
          'reddedilmektedir / bulunmamaktadır',
          'reddedilmemektedir / bulunmaktadır',
          'reddedilmemektedir / bulunmamaktadır'
        ],
        correctAnswer: 'reddedilmektedir / bulunmaktadır',
        solution: `$|t_{\\log(arsa)}| = 4 > 1.96 = t_{kritik}$ olduğundan $H_0$ **reddedilmektedir**. Bu durumda log(arsa) ile fiyat arasında istatistiksel olarak anlamlı bir ilişki **bulunmaktadır**.`
      }
    ]
  },
  {
    id: "3-2",
    difficulty: "Orta",
    title: "Maaş Modeli - İnsan Kaynakları",
    context: `Çalışan maaşını (maaş), tecrübe (yıl), eğitim süresi (yıl), şirket büyüklüğü (log_calisan) ve performans puanı ile açıklayan ekonometrik model aşağıdaki gibidir.`,
    model: `\\widehat{maaş} = \\underset{(0.85)}{2.45} + \\underset{(0.025)}{0.075} (tecrübe) + \\underset{(0.04)}{0.12} (eğitim) + \\underset{(0.03)}{0.09} \\log(calisan) + \\underset{(0.008)}{0.024} (performans)`,
    additionalInfo: `n = 520, \\quad R^2 = 0.587`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{tecrübe}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '3',
        solution: `$t_{tecrübe} = \\frac{0.075}{0.025} = 3$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['514', '515', '516', '519'],
        correctAnswer: '515',
        solution: `Serbestlik derecesi = $n - k - 1 = 520 - 4 - 1 = 515$`
      },
      {
        id: "c",
        question: `Bu model için çift yönlü testte, anlamlılık düzeyi $\\alpha = 0.05$ için kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['1.64', '1.96', '2.00', '2.58'],
        correctAnswer: '1.96',
        solution: `Serbestlik derecesi 515 olduğundan, $t_{kritik} \\approx 1.96$`
      },
      {
        id: "d",
        question: `$\\beta_{tecrübe}$ için %95 güven aralığının alt ve üst sınırlarını hesaplayınız.`,
        type: 'open-ended',
        solution: `Alt sınır = $0.075 - 1.96 \\times 0.025 = 0.075 - 0.049 = 0.026$\nÜst sınır = $0.075 + 1.96 \\times 0.025 = 0.075 + 0.049 = 0.124$\n\n**Güven Aralığı: [0.026, 0.124]**`
      },
      {
        id: "e",
        question: `$H_0: \\beta_{tecrübe} = 0$ hipotezi $\\alpha = 0.05$ düzeyinde ________. Tecrübe ile maaş arasında istatistiksel olarak anlamlı bir ilişki ________.`,
        type: 'multiple-choice',
        options: [
          'reddedilmektedir / bulunmaktadır',
          'reddedilmektedir / bulunmamaktadır',
          'reddedilmemektedir / bulunmaktadır',
          'reddedilmemektedir / bulunmamaktadır'
        ],
        correctAnswer: 'reddedilmektedir / bulunmaktadır',
        solution: `$|t_{tecrübe}| = 3 > 1.96$ olduğundan $H_0$ **reddedilmektedir**. Tecrübe ile maaş arasında istatistiksel olarak anlamlı bir ilişki **bulunmaktadır**.`
      }
    ]
  },
  {
    id: "3-3",
    difficulty: "Kolay",
    title: "Satış Modeli - Perakende",
    context: `Mağaza satışlarını (satış), reklam harcaması, çalışan sayısı ve mağaza alanı ile açıklayan ekonometrik model aşağıdaki gibidir.`,
    model: `\\widehat{satış} = \\underset{(5.2)}{12.5} + \\underset{(0.4)}{2.0} (reklam) + \\underset{(0.15)}{0.45} (calisan) + \\underset{(0.02)}{0.08} (alan)`,
    additionalInfo: `n = 85, \\quad R^2 = 0.724`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{reklam}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['3', '4', '5', '6'],
        correctAnswer: '5',
        solution: `$t_{reklam} = \\frac{2.0}{0.4} = 5$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['80', '81', '82', '84'],
        correctAnswer: '81',
        solution: `Serbestlik derecesi = $n - k - 1 = 85 - 3 - 1 = 81$`
      },
      {
        id: "c",
        question: `Bu model için çift yönlü testte, anlamlılık düzeyi $\\alpha = 0.05$ için kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['1.66', '1.96', '2.00', '2.64'],
        correctAnswer: '2.00',
        solution: `Serbestlik derecesi 81 için $t_{kritik} \\approx 2.00$`
      },
      {
        id: "d",
        question: `$\\beta_{reklam}$ için %95 güven aralığının alt ve üst sınırlarını hesaplayınız.`,
        type: 'open-ended',
        solution: `Alt sınır = $2.0 - 2.00 \\times 0.4 = 2.0 - 0.8 = 1.2$\nÜst sınır = $2.0 + 2.00 \\times 0.4 = 2.0 + 0.8 = 2.8$\n\n**Güven Aralığı: [1.2, 2.8]**`
      },
      {
        id: "e",
        question: `$H_0: \\beta_{reklam} = 0$ hipotezi $\\alpha = 0.05$ düzeyinde ________. Reklam ile satış arasında istatistiksel olarak anlamlı bir ilişki ________.`,
        type: 'multiple-choice',
        options: [
          'reddedilmektedir / bulunmaktadır',
          'reddedilmektedir / bulunmamaktadır',
          'reddedilmemektedir / bulunmaktadır',
          'reddedilmemektedir / bulunmamaktadır'
        ],
        correctAnswer: 'reddedilmektedir / bulunmaktadır',
        solution: `$|t_{reklam}| = 5 > 2.00$ olduğundan $H_0$ **reddedilmektedir**. Reklam ile satış arasında istatistiksel olarak anlamlı bir ilişki **bulunmaktadır**.`
      }
    ]
  },
  {
    id: "3-4",
    difficulty: "Kolay",
    title: "Verimlilik Modeli - Üretim",
    context: `Fabrika verimliliğini (verim), makine sayısı, işçi sayısı ve hammadde kalitesi ile açıklayan ekonometrik model aşağıdaki gibidir.`,
    model: `\\widehat{verim} = \\underset{(8.5)}{25.0} + \\underset{(0.6)}{1.8} (makine) + \\underset{(0.25)}{0.5} (işçi) + \\underset{(0.1)}{0.4} (kalite)`,
    additionalInfo: `n = 64, \\quad R^2 = 0.689`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{makine}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '3',
        solution: `$t_{makine} = \\frac{1.8}{0.6} = 3$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['59', '60', '61', '63'],
        correctAnswer: '60',
        solution: `Serbestlik derecesi = $n - k - 1 = 64 - 3 - 1 = 60$`
      },
      {
        id: "c",
        question: `Bu model için çift yönlü testte, anlamlılık düzeyi $\\alpha = 0.05$ için kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['1.67', '1.96', '2.00', '2.66'],
        correctAnswer: '2.00',
        solution: `Serbestlik derecesi 60 için $t_{kritik} \\approx 2.00$`
      },
      {
        id: "d",
        question: `$\\beta_{makine}$ için %95 güven aralığının alt ve üst sınırlarını hesaplayınız.`,
        type: 'open-ended',
        solution: `Alt sınır = $1.8 - 2.00 \\times 0.6 = 1.8 - 1.2 = 0.6$\nÜst sınır = $1.8 + 2.00 \\times 0.6 = 1.8 + 1.2 = 3.0$\n\n**Güven Aralığı: [0.6, 3.0]**`
      },
      {
        id: "e",
        question: `$H_0: \\beta_{makine} = 0$ hipotezi $\\alpha = 0.05$ düzeyinde ________. Makine sayısı ile verimlilik arasında istatistiksel olarak anlamlı bir ilişki ________.`,
        type: 'multiple-choice',
        options: [
          'reddedilmektedir / bulunmaktadır',
          'reddedilmektedir / bulunmamaktadır',
          'reddedilmemektedir / bulunmaktadır',
          'reddedilmemektedir / bulunmamaktadır'
        ],
        correctAnswer: 'reddedilmektedir / bulunmaktadır',
        solution: `$|t_{makine}| = 3 > 2.00$ olduğundan $H_0$ **reddedilmektedir**. Makine sayısı ile verimlilik arasında istatistiksel olarak anlamlı bir ilişki **bulunmaktadır**.`
      }
    ]
  },
  {
    id: "3-5",
    difficulty: "Orta",
    title: "Tüketim Modeli - Hanehalkı",
    context: `Hanehalkı tüketim harcamalarını (tüketim), gelir, tasarruf oranı ve hanehalkı büyüklüğü ile açıklayan ekonometrik model aşağıdaki gibidir.`,
    model: `\\widehat{tüketim} = \\underset{(0.45)}{1.25} + \\underset{(0.015)}{0.06} (gelir) - \\underset{(0.02)}{0.04} (tasarruf) + \\underset{(0.08)}{0.32} (hane)`,
    additionalInfo: `n = 245, \\quad R^2 = 0.812`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{gelir}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
        solution: `$t_{gelir} = \\frac{0.06}{0.015} = 4$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['240', '241', '242', '244'],
        correctAnswer: '241',
        solution: `Serbestlik derecesi = $n - k - 1 = 245 - 3 - 1 = 241$`
      },
      {
        id: "c",
        question: `Bu model için çift yönlü testte, anlamlılık düzeyi $\\alpha = 0.05$ için kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['1.65', '1.96', '2.00', '2.58'],
        correctAnswer: '1.96',
        solution: `Serbestlik derecesi 241 için $t_{kritik} \\approx 1.96$`
      },
      {
        id: "d",
        question: `$\\beta_{gelir}$ için %95 güven aralığının alt ve üst sınırlarını hesaplayınız.`,
        type: 'open-ended',
        solution: `Alt sınır = $0.06 - 1.96 \\times 0.015 = 0.06 - 0.0294 = 0.0306$\nÜst sınır = $0.06 + 1.96 \\times 0.015 = 0.06 + 0.0294 = 0.0894$\n\n**Güven Aralığı: [0.031, 0.089]** (yaklaşık)`
      },
      {
        id: "e",
        question: `$H_0: \\beta_{gelir} = 0$ hipotezi $\\alpha = 0.05$ düzeyinde ________. Gelir ile tüketim arasında istatistiksel olarak anlamlı bir ilişki ________.`,
        type: 'multiple-choice',
        options: [
          'reddedilmektedir / bulunmaktadır',
          'reddedilmektedir / bulunmamaktadır',
          'reddedilmemektedir / bulunmaktadır',
          'reddedilmemektedir / bulunmamaktadır'
        ],
        correctAnswer: 'reddedilmektedir / bulunmaktadır',
        solution: `$|t_{gelir}| = 4 > 1.96$ olduğundan $H_0$ **reddedilmektedir**. Gelir ile tüketim arasında istatistiksel olarak anlamlı bir ilişki **bulunmaktadır**.`
      }
    ]
  },
  {
    id: "3-6",
    difficulty: "Zor",
    title: "Yatırım Modeli - Finans",
    context: `Şirket yatırımlarını (yatırım), nakit akışı, borç oranı, aktif büyüklüğü ve karlılık ile açıklayan ekonometrik model aşağıdaki gibidir.`,
    model: `\\widehat{yatırım} = \\underset{(1.5)}{-3.2} + \\underset{(0.02)}{0.08} (nakit) - \\underset{(0.01)}{0.02} (borç) + \\underset{(0.15)}{0.45} \\log(aktif) + \\underset{(0.025)}{0.05} (karlılık)`,
    additionalInfo: `n = 380, \\quad R^2 = 0.623`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{nakit}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
        solution: `$t_{nakit} = \\frac{0.08}{0.02} = 4$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['374', '375', '376', '379'],
        correctAnswer: '375',
        solution: `Serbestlik derecesi = $n - k - 1 = 380 - 4 - 1 = 375$`
      },
      {
        id: "c",
        question: `Bu model için çift yönlü testte, anlamlılık düzeyi $\\alpha = 0.01$ için kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['1.96', '2.33', '2.58', '2.81'],
        correctAnswer: '2.58',
        solution: `Serbestlik derecesi 375 ve $\\alpha = 0.01$ için $t_{kritik} \\approx 2.58$`
      },
      {
        id: "d",
        question: `$\\beta_{nakit}$ için %99 güven aralığının alt ve üst sınırlarını hesaplayınız.`,
        type: 'open-ended',
        solution: `Alt sınır = $0.08 - 2.58 \\times 0.02 = 0.08 - 0.0516 = 0.0284$\nÜst sınır = $0.08 + 2.58 \\times 0.02 = 0.08 + 0.0516 = 0.1316$\n\n**Güven Aralığı: [0.028, 0.132]** (yaklaşık)`
      },
      {
        id: "e",
        question: `$H_0: \\beta_{nakit} = 0$ hipotezi $\\alpha = 0.01$ düzeyinde ________. Nakit akışı ile yatırım arasında istatistiksel olarak anlamlı bir ilişki ________.`,
        type: 'multiple-choice',
        options: [
          'reddedilmektedir / bulunmaktadır',
          'reddedilmektedir / bulunmamaktadır',
          'reddedilmemektedir / bulunmaktadır',
          'reddedilmemektedir / bulunmamaktadır'
        ],
        correctAnswer: 'reddedilmektedir / bulunmaktadır',
        solution: `$|t_{nakit}| = 4 > 2.58$ olduğundan $H_0$ **reddedilmektedir**. Nakit akışı ile yatırım arasında istatistiksel olarak anlamlı bir ilişki **bulunmaktadır**.`
      }
    ]
  },
  {
    id: "3-7",
    difficulty: "Zor",
    title: "İhracat Modeli - Dış Ticaret",
    context: `Firma ihracatını (ihracat), döviz kuru, üretim kapasitesi, Ar-Ge harcaması ve işgücü verimliliği ile açıklayan ekonometrik model aşağıdaki gibidir.`,
    model: `\\log(\\widehat{ihracat}) = \\underset{(0.95)}{1.85} + \\underset{(0.05)}{0.15} (kur) + \\underset{(0.004)}{0.012} (kapasite) + \\underset{(0.08)}{0.32} \\log(ArGe) + \\underset{(0.03)}{0.09} (verimlilik)`,
    additionalInfo: `n = 156, \\quad R^2 = 0.698`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{kur}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '3',
        solution: `$t_{kur} = \\frac{0.15}{0.05} = 3$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['150', '151', '152', '155'],
        correctAnswer: '151',
        solution: `Serbestlik derecesi = $n - k - 1 = 156 - 4 - 1 = 151$`
      },
      {
        id: "c",
        question: `Bu model için çift yönlü testte, anlamlılık düzeyi $\\alpha = 0.05$ için kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['1.65', '1.96', '2.00', '2.58'],
        correctAnswer: '1.96',
        solution: `Serbestlik derecesi 151 için $t_{kritik} \\approx 1.96$`
      },
      {
        id: "d",
        question: `$\\beta_{kur}$ için %95 güven aralığının alt ve üst sınırlarını hesaplayınız.`,
        type: 'open-ended',
        solution: `Alt sınır = $0.15 - 1.96 \\times 0.05 = 0.15 - 0.098 = 0.052$\nÜst sınır = $0.15 + 1.96 \\times 0.05 = 0.15 + 0.098 = 0.248$\n\n**Güven Aralığı: [0.052, 0.248]**`
      },
      {
        id: "e",
        question: `$H_0: \\beta_{kur} = 0$ hipotezi $\\alpha = 0.05$ düzeyinde ________. Döviz kuru ile ihracat arasında istatistiksel olarak anlamlı bir ilişki ________.`,
        type: 'multiple-choice',
        options: [
          'reddedilmektedir / bulunmaktadır',
          'reddedilmektedir / bulunmamaktadır',
          'reddedilmemektedir / bulunmaktadır',
          'reddedilmemektedir / bulunmamaktadır'
        ],
        correctAnswer: 'reddedilmektedir / bulunmaktadır',
        solution: `$|t_{kur}| = 3 > 1.96$ olduğundan $H_0$ **reddedilmektedir**. Döviz kuru ile ihracat arasında istatistiksel olarak anlamlı bir ilişki **bulunmaktadır**.`
      }
    ]
  },
  {
    id: "3-8",
    difficulty: "Kolay",
    title: "Kira Modeli - Emlak",
    context: `Daire kiralarını (kira), daire alanı, kat sayısı ve bina yaşı ile açıklayan ekonometrik model aşağıdaki gibidir.`,
    model: `\\widehat{kira} = \\underset{(120)}{450} + \\underset{(2.5)}{12.5} (alan) + \\underset{(15)}{30} (kat) - \\underset{(4)}{16} (bina\\_yaşı)`,
    additionalInfo: `n = 92, \\quad R^2 = 0.756`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{alan}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['3', '4', '5', '6'],
        correctAnswer: '5',
        solution: `$t_{alan} = \\frac{12.5}{2.5} = 5$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['87', '88', '89', '91'],
        correctAnswer: '88',
        solution: `Serbestlik derecesi = $n - k - 1 = 92 - 3 - 1 = 88$`
      },
      {
        id: "c",
        question: `Bu model için çift yönlü testte, anlamlılık düzeyi $\\alpha = 0.05$ için kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['1.66', '1.96', '2.00', '2.63'],
        correctAnswer: '2.00',
        solution: `Serbestlik derecesi 88 için $t_{kritik} \\approx 2.00$`
      },
      {
        id: "d",
        question: `$\\beta_{alan}$ için %95 güven aralığının alt ve üst sınırlarını hesaplayınız.`,
        type: 'open-ended',
        solution: `Alt sınır = $12.5 - 2.00 \\times 2.5 = 12.5 - 5.0 = 7.5$\nÜst sınır = $12.5 + 2.00 \\times 2.5 = 12.5 + 5.0 = 17.5$\n\n**Güven Aralığı: [7.5, 17.5]**`
      },
      {
        id: "e",
        question: `$H_0: \\beta_{alan} = 0$ hipotezi $\\alpha = 0.05$ düzeyinde ________. Daire alanı ile kira arasında istatistiksel olarak anlamlı bir ilişki ________.`,
        type: 'multiple-choice',
        options: [
          'reddedilmektedir / bulunmaktadır',
          'reddedilmektedir / bulunmamaktadır',
          'reddedilmemektedir / bulunmaktadır',
          'reddedilmemektedir / bulunmamaktadır'
        ],
        correctAnswer: 'reddedilmektedir / bulunmaktadır',
        solution: `$|t_{alan}| = 5 > 2.00$ olduğundan $H_0$ **reddedilmektedir**. Daire alanı ile kira arasında istatistiksel olarak anlamlı bir ilişki **bulunmaktadır**.`
      }
    ]
  },
  {
    id: "3-9",
    difficulty: "Zor",
    title: "Büyüme Modeli - Makroekonomi",
    context: `Ülke ekonomik büyümesini (büyüme), yatırım oranı, enflasyon, dış ticaret açıklığı ve eğitim düzeyi ile açıklayan ekonometrik model aşağıdaki gibidir.`,
    model: `\\widehat{büyüme} = \\underset{(0.85)}{1.45} + \\underset{(0.02)}{0.08} (yatırım) - \\underset{(0.015)}{0.03} (enflasyon) + \\underset{(0.01)}{0.04} (açıklık) + \\underset{(0.05)}{0.15} (eğitim)`,
    additionalInfo: `n = 124, \\quad R^2 = 0.567`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{yatırım}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
        solution: `$t_{yatırım} = \\frac{0.08}{0.02} = 4$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['118', '119', '120', '123'],
        correctAnswer: '119',
        solution: `Serbestlik derecesi = $n - k - 1 = 124 - 4 - 1 = 119$`
      },
      {
        id: "c",
        question: `Bu model için çift yönlü testte, anlamlılık düzeyi $\\alpha = 0.10$ için kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['1.29', '1.66', '1.96', '2.36'],
        correctAnswer: '1.66',
        solution: `Serbestlik derecesi 119 ve $\\alpha = 0.10$ için $t_{kritik} \\approx 1.66$`
      },
      {
        id: "d",
        question: `$\\beta_{yatırım}$ için %90 güven aralığının alt ve üst sınırlarını hesaplayınız.`,
        type: 'open-ended',
        solution: `Alt sınır = $0.08 - 1.66 \\times 0.02 = 0.08 - 0.0332 = 0.0468$\nÜst sınır = $0.08 + 1.66 \\times 0.02 = 0.08 + 0.0332 = 0.1132$\n\n**Güven Aralığı: [0.047, 0.113]** (yaklaşık)`
      },
      {
        id: "e",
        question: `$H_0: \\beta_{yatırım} = 0$ hipotezi $\\alpha = 0.10$ düzeyinde ________. Yatırım oranı ile ekonomik büyüme arasında istatistiksel olarak anlamlı bir ilişki ________.`,
        type: 'multiple-choice',
        options: [
          'reddedilmektedir / bulunmaktadır',
          'reddedilmektedir / bulunmamaktadır',
          'reddedilmemektedir / bulunmaktadır',
          'reddedilmemektedir / bulunmamaktadır'
        ],
        correctAnswer: 'reddedilmektedir / bulunmaktadır',
        solution: `$|t_{yatırım}| = 4 > 1.66$ olduğundan $H_0$ **reddedilmektedir**. Yatırım oranı ile ekonomik büyüme arasında istatistiksel olarak anlamlı bir ilişki **bulunmaktadır**.`
      }
    ]
  },
  {
    id: "3-10",
    difficulty: "Orta",
    title: "Sağlık Modeli - Hastane",
    context: `Hasta tedavi maliyetini (maliyet), yaş, kronik hastalık sayısı ve yatış süresi ile açıklayan ekonometrik model aşağıdaki gibidir.`,
    model: `\\log(\\widehat{maliyet}) = \\underset{(0.25)}{5.5} + \\underset{(0.002)}{0.008} (yaş) + \\underset{(0.05)}{0.15} (kronik) + \\underset{(0.01)}{0.04} (yatış)`,
    additionalInfo: `n = 215, \\quad R^2 = 0.634`,
    parts: [
      {
        id: "a",
        question: `Bu model için $|t_{yaş}|$ değeri kaçtır?`,
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
        solution: `$t_{yaş} = \\frac{0.008}{0.002} = 4$`
      },
      {
        id: "b",
        question: `Bu model için serbestlik derecesi nedir?`,
        type: 'multiple-choice',
        options: ['210', '211', '212', '214'],
        correctAnswer: '211',
        solution: `Serbestlik derecesi = $n - k - 1 = 215 - 3 - 1 = 211$`
      },
      {
        id: "c",
        question: `Bu model için çift yönlü testte, anlamlılık düzeyi $\\alpha = 0.05$ için kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['1.65', '1.96', '2.00', '2.58'],
        correctAnswer: '1.96',
        solution: `Serbestlik derecesi 211 için $t_{kritik} \\approx 1.96$`
      },
      {
        id: "d",
        question: `$\\beta_{yaş}$ için %95 güven aralığının alt ve üst sınırlarını hesaplayınız.`,
        type: 'open-ended',
        solution: `Alt sınır = $0.008 - 1.96 \\times 0.002 = 0.008 - 0.00392 = 0.00408$\nÜst sınır = $0.008 + 1.96 \\times 0.002 = 0.008 + 0.00392 = 0.01192$\n\n**Güven Aralığı: [0.004, 0.012]** (yaklaşık)`
      },
      {
        id: "e",
        question: `$H_0: \\beta_{yaş} = 0$ hipotezi $\\alpha = 0.05$ düzeyinde ________. Yaş ile tedavi maliyeti arasında istatistiksel olarak anlamlı bir ilişki ________.`,
        type: 'multiple-choice',
        options: [
          'reddedilmektedir / bulunmaktadır',
          'reddedilmektedir / bulunmamaktadır',
          'reddedilmemektedir / bulunmaktadır',
          'reddedilmemektedir / bulunmamaktadır'
        ],
        correctAnswer: 'reddedilmektedir / bulunmaktadır',
        solution: `$|t_{yaş}| = 4 > 1.96$ olduğundan $H_0$ **reddedilmektedir**. Yaş ile tedavi maliyeti arasında istatistiksel olarak anlamlı bir ilişki **bulunmaktadır**.`
      }
    ]
  }
];

// ===========================================
// KATEGORİ 4: F-Testi ve Kısıtlı Model (Çoktan Seçmeli + Açık Uçlu)
// ===========================================
const category4Questions: Question[] = [
  {
    id: "4-1",
    difficulty: "Zor",
    title: "Vize Puanı Modeli - Üniversite",
    context: `Fethiye İşletme Fakültesi Ekonomi ve Finans Bölümü öğrencilerinin Ekonometrik Analiz II derslerinin vize puanlarını öngören model aşağıdaki gibidir:

ekonpuan = Ekonometrik Analiz II dersi ara sınav puanı,
kalori = haftalık ortalama kalori miktarı,
cihazsayısı = dys.mu.edu.tr'ye girmesine olanak tanıyan elektronik cihaz adedi,
sosyalmedya = öğrencinin sosyal medyada harcadığı ortalama haftalık saat,
ders = öğrencinin ders çalışmak için harcadığı haftalık ortalama saat,
oyun = öğrencinin oyun oynarken harcadığı haftalık ortalama saat.

Öğrencilerin farklı aktivitelerde harcadığı haftalık süreyi test etmek için "sosyalmedya", "ders" ve "oyun" değişkenleri dışlama kısıtı konmuştur.`,
    model: `\\text{Kısıtsız Model: } \\widehat{ekonpuan} = \\underset{(0.74)}{40.67} + \\underset{(0.057)}{0.03} kalori + \\underset{(0.991)}{2.67} cihazsayısı - \\underset{(0.131)}{0.44} sosyalmedya + \\underset{(0.342)}{0.51} ders - \\underset{(0.238)}{0.31} oyun`,
    additionalInfo: `n = 46, \\quad SSR = 10, \\quad R^2 = 0.90`,
    parts: [
      {
        id: "a",
        question: `Bu modelin F istatistiği kaçtır?`,
        type: 'multiple-choice',
        options: ['6', '7', '8', '9'],
        correctAnswer: '8',
        solution: `F istatistiği formülü: $F = \\frac{(SSR_R - SSR_{UR})/q}{SSR_{UR}/(n-k-1)}$\n\nKısıtlı model: $SSR_R = 16$, Kısıtsız model: $SSR_{UR} = 10$\nKısıt sayısı: $q = 3$ (sosyalmedya, ders, oyun)\n$n - k - 1 = 46 - 5 - 1 = 40$\n\n$F = \\frac{(16-10)/3}{10/40} = \\frac{6/3}{0.25} = \\frac{2}{0.25} = 8$`
      },
      {
        id: "b",
        question: `Bu modelde kısıtlı modelin serbestlik derecesi 3 iken kısıtsız modelin serbestlik derecesi kaçtır?`,
        type: 'multiple-choice',
        options: ['38', '39', '40', '41'],
        correctAnswer: '40',
        solution: `Kısıtsız model serbestlik derecesi = $n - k - 1 = 46 - 5 - 1 = 40$`
      },
      {
        id: "c",
        question: `Bu modelde F dağılımı için %5 kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['2.61', '2.84', '3.12', '3.46'],
        correctAnswer: '2.84',
        solution: `$F_{0.05}(3, 40) \\approx 2.84$ (F tablosundan)`
      },
      {
        id: "d",
        question: `Bu modele göre $H_0: \\beta_{sosyalmedya} = 0, \\beta_{ders} = 0, \\beta_{oyun} = 0$ hipotezini $H_1: H_0$ doğru değildir hipotezi lehine test ediniz.`,
        type: 'multiple-choice',
        options: [
          'F = 8 > 2.84 olduğundan H₀ reddedilir',
          'F = 8 < 2.84 olduğundan H₀ reddedilemez',
          'F = 8 > 2.84 olduğundan H₀ reddedilemez',
          'F = 8 < 2.84 olduğundan H₀ reddedilir'
        ],
        correctAnswer: 'F = 8 > 2.84 olduğundan H₀ reddedilir',
        solution: `$F_{hesaplanan} = 8 > F_{kritik} = 2.84$ olduğundan $H_0$ reddedilir. Sosyalmedya, ders ve oyun değişkenlerinden en az biri istatistiksel olarak anlamlıdır.`
      }
    ]
  },
  {
    id: "4-2",
    difficulty: "Zor",
    title: "Maaş Modeli - İşletme",
    context: `Çalışan maaşlarını öngören model aşağıdaki gibidir. Tecrübe, eğitim ve yaş değişkenlerinin birlikte anlamlılığını test etmek için kısıtlı model oluşturulmuştur.`,
    model: `\\text{Kısıtsız Model: } \\widehat{maaş} = \\underset{(1.2)}{5.5} + \\underset{(0.08)}{0.32} tecrübe + \\underset{(0.12)}{0.48} eğitim + \\underset{(0.05)}{0.15} yaş - \\underset{(0.03)}{0.06} mesafe`,
    additionalInfo: `n = 85, \\quad SSR_{UR} = 120, \\quad SSR_R = 180, \\quad R^2 = 0.72`,
    parts: [
      {
        id: "a",
        question: `Bu modelin F istatistiği kaçtır? (Kısıt: tecrübe, eğitim, yaş = 0)`,
        type: 'multiple-choice',
        options: ['11', '12', '13', '14'],
        correctAnswer: '13',
        solution: `$F = \\frac{(SSR_R - SSR_{UR})/q}{SSR_{UR}/(n-k-1)} = \\frac{(180-120)/3}{120/80} = \\frac{60/3}{1.5} = \\frac{20}{1.5} = 13.33 \\approx 13$`
      },
      {
        id: "b",
        question: `Kısıtsız modelin serbestlik derecesi kaçtır?`,
        type: 'multiple-choice',
        options: ['79', '80', '81', '84'],
        correctAnswer: '80',
        solution: `Serbestlik derecesi = $n - k - 1 = 85 - 4 - 1 = 80$`
      },
      {
        id: "c",
        question: `F dağılımı için %5 kritik değer nedir? (df1=3, df2=80)`,
        type: 'multiple-choice',
        options: ['2.49', '2.72', '2.96', '3.15'],
        correctAnswer: '2.72',
        solution: `$F_{0.05}(3, 80) \\approx 2.72$`
      },
      {
        id: "d",
        question: `Hipotez testi sonucuna göre ne söylenebilir?`,
        type: 'multiple-choice',
        options: [
          'Tecrübe, eğitim ve yaş birlikte anlamlıdır',
          'Tecrübe, eğitim ve yaş birlikte anlamsızdır',
          'Sadece tecrübe anlamlıdır',
          'Yorum yapılamaz'
        ],
        correctAnswer: 'Tecrübe, eğitim ve yaş birlikte anlamlıdır',
        solution: `$F = 13 > 2.72$ olduğundan $H_0$ reddedilir. Tecrübe, eğitim ve yaş değişkenleri birlikte istatistiksel olarak anlamlıdır.`
      }
    ]
  },
  {
    id: "4-3",
    difficulty: "Orta",
    title: "Satış Modeli - Perakende",
    context: `Mağaza satışlarını öngören model aşağıdaki gibidir. Reklam ve promosyon değişkenlerinin birlikte etkisini test etmek için kısıtlı model oluşturulmuştur.`,
    model: `\\text{Kısıtsız Model: } \\widehat{satış} = \\underset{(8)}{35} + \\underset{(0.5)}{2.5} reklam + \\underset{(0.3)}{1.2} promosyon + \\underset{(0.4)}{1.6} personel`,
    additionalInfo: `n = 52, \\quad SSR_{UR} = 200, \\quad SSR_R = 320, \\quad R^2 = 0.68`,
    parts: [
      {
        id: "a",
        question: `Bu modelin F istatistiği kaçtır? (Kısıt: reklam, promosyon = 0)`,
        type: 'multiple-choice',
        options: ['12', '13', '14', '15'],
        correctAnswer: '14',
        solution: `$F = \\frac{(320-200)/2}{200/48} = \\frac{120/2}{4.17} = \\frac{60}{4.17} \\approx 14.4 \\approx 14$`
      },
      {
        id: "b",
        question: `Kısıtsız modelin serbestlik derecesi kaçtır?`,
        type: 'multiple-choice',
        options: ['47', '48', '49', '51'],
        correctAnswer: '48',
        solution: `Serbestlik derecesi = $n - k - 1 = 52 - 3 - 1 = 48$`
      },
      {
        id: "c",
        question: `F dağılımı için %5 kritik değer nedir? (df1=2, df2=48)`,
        type: 'multiple-choice',
        options: ['2.84', '3.08', '3.19', '3.42'],
        correctAnswer: '3.19',
        solution: `$F_{0.05}(2, 48) \\approx 3.19$`
      },
      {
        id: "d",
        question: `Hipotez testi sonucu nedir?`,
        type: 'multiple-choice',
        options: [
          'Reklam ve promosyon birlikte anlamlıdır',
          'Reklam ve promosyon birlikte anlamsızdır',
          'Sadece reklam anlamlıdır',
          'Yorum yapılamaz'
        ],
        correctAnswer: 'Reklam ve promosyon birlikte anlamlıdır',
        solution: `$F = 14 > 3.19$ olduğundan $H_0$ reddedilir. Reklam ve promosyon değişkenleri birlikte anlamlıdır.`
      }
    ]
  },
  {
    id: "4-4",
    difficulty: "Orta",
    title: "Verimlilik Modeli - Üretim",
    context: `Fabrika verimliliğini öngören model aşağıdaki gibidir. Makine ve enerji değişkenlerinin birlikte etkisini test etmek için kısıtlı model oluşturulmuştur.`,
    model: `\\text{Kısıtsız Model: } \\widehat{verim} = \\underset{(12)}{45} + \\underset{(0.8)}{3.2} makine + \\underset{(0.15)}{0.6} enerji + \\underset{(0.4)}{1.2} işçi`,
    additionalInfo: `n = 68, \\quad SSR_{UR} = 450, \\quad SSR_R = 630, \\quad R^2 = 0.71`,
    parts: [
      {
        id: "a",
        question: `Bu modelin F istatistiği kaçtır? (Kısıt: makine, enerji = 0)`,
        type: 'multiple-choice',
        options: ['10', '11', '12', '13'],
        correctAnswer: '12',
        solution: `$F = \\frac{(630-450)/2}{450/64} = \\frac{180/2}{7.03} = \\frac{90}{7.03} \\approx 12.8 \\approx 12$`
      },
      {
        id: "b",
        question: `Kısıtsız modelin serbestlik derecesi kaçtır?`,
        type: 'multiple-choice',
        options: ['63', '64', '65', '67'],
        correctAnswer: '64',
        solution: `Serbestlik derecesi = $n - k - 1 = 68 - 3 - 1 = 64$`
      },
      {
        id: "c",
        question: `F dağılımı için %1 kritik değer nedir? (df1=2, df2=64)`,
        type: 'multiple-choice',
        options: ['4.00', '4.95', '5.42', '6.01'],
        correctAnswer: '4.95',
        solution: `$F_{0.01}(2, 64) \\approx 4.95$`
      },
      {
        id: "d",
        question: `$\\alpha = 0.01$ düzeyinde hipotez testi sonucu nedir?`,
        type: 'multiple-choice',
        options: [
          'Makine ve enerji birlikte anlamlıdır',
          'Makine ve enerji birlikte anlamsızdır',
          'Sadece makine anlamlıdır',
          'Karar verilemez'
        ],
        correctAnswer: 'Makine ve enerji birlikte anlamlıdır',
        solution: `$F = 12 > 4.95$ olduğundan $H_0$ reddedilir. Makine ve enerji değişkenleri $\\alpha = 0.01$ düzeyinde birlikte anlamlıdır.`
      }
    ]
  },
  {
    id: "4-5",
    difficulty: "Kolay",
    title: "Tüketim Modeli - Hanehalkı",
    context: `Hanehalkı tüketimini öngören model aşağıdaki gibidir. Gelir ve tasarruf değişkenlerinin birlikte etkisini test etmek için kısıtlı model oluşturulmuştur.`,
    model: `\\text{Kısıtsız Model: } \\widehat{tüketim} = \\underset{(0.5)}{2.1} + \\underset{(0.02)}{0.08} gelir - \\underset{(0.01)}{0.03} tasarruf + \\underset{(0.05)}{0.15} hane`,
    additionalInfo: `n = 124, \\quad SSR_{UR} = 85, \\quad SSR_R = 145, \\quad R^2 = 0.78`,
    parts: [
      {
        id: "a",
        question: `Bu modelin F istatistiği kaçtır? (Kısıt: gelir, tasarruf = 0)`,
        type: 'multiple-choice',
        options: ['40', '41', '42', '43'],
        correctAnswer: '42',
        solution: `$F = \\frac{(145-85)/2}{85/120} = \\frac{60/2}{0.708} = \\frac{30}{0.708} \\approx 42.4 \\approx 42$`
      },
      {
        id: "b",
        question: `Kısıtsız modelin serbestlik derecesi kaçtır?`,
        type: 'multiple-choice',
        options: ['119', '120', '121', '123'],
        correctAnswer: '120',
        solution: `Serbestlik derecesi = $n - k - 1 = 124 - 3 - 1 = 120$`
      },
      {
        id: "c",
        question: `F dağılımı için %5 kritik değer nedir? (df1=2, df2=120)`,
        type: 'multiple-choice',
        options: ['2.68', '3.07', '3.23', '3.55'],
        correctAnswer: '3.07',
        solution: `$F_{0.05}(2, 120) \\approx 3.07$`
      },
      {
        id: "d",
        question: `Hipotez testi sonucu nedir?`,
        type: 'multiple-choice',
        options: [
          'Gelir ve tasarruf birlikte anlamlıdır',
          'Gelir ve tasarruf birlikte anlamsızdır',
          'Sadece gelir anlamlıdır',
          'Yorum yapılamaz'
        ],
        correctAnswer: 'Gelir ve tasarruf birlikte anlamlıdır',
        solution: `$F = 42 > 3.07$ olduğundan $H_0$ reddedilir. Gelir ve tasarruf değişkenleri birlikte anlamlıdır.`
      }
    ]
  },
  {
    id: "4-6",
    difficulty: "Zor",
    title: "Yatırım Modeli - Finans",
    context: `Şirket yatırımlarını öngören model aşağıdaki gibidir. Nakit, borç ve karlılık değişkenlerinin birlikte etkisini test etmek için kısıtlı model oluşturulmuştur.`,
    model: `\\text{Kısıtsız Model: } \\widehat{yatırım} = \\underset{(1.8)}{-2.5} + \\underset{(0.03)}{0.12} nakit - \\underset{(0.02)}{0.04} borç + \\underset{(0.04)}{0.16} karlılık + \\underset{(0.2)}{0.8} büyüklük`,
    additionalInfo: `n = 95, \\quad SSR_{UR} = 280, \\quad SSR_R = 490, \\quad R^2 = 0.69`,
    parts: [
      {
        id: "a",
        question: `Bu modelin F istatistiği kaçtır? (Kısıt: nakit, borç, karlılık = 0)`,
        type: 'multiple-choice',
        options: ['20', '22', '24', '26'],
        correctAnswer: '22',
        solution: `$F = \\frac{(490-280)/3}{280/90} = \\frac{210/3}{3.11} = \\frac{70}{3.11} \\approx 22.5 \\approx 22$`
      },
      {
        id: "b",
        question: `Kısıtsız modelin serbestlik derecesi kaçtır?`,
        type: 'multiple-choice',
        options: ['89', '90', '91', '94'],
        correctAnswer: '90',
        solution: `Serbestlik derecesi = $n - k - 1 = 95 - 4 - 1 = 90$`
      },
      {
        id: "c",
        question: `F dağılımı için %1 kritik değer nedir? (df1=3, df2=90)`,
        type: 'multiple-choice',
        options: ['3.42', '3.95', '4.02', '4.28'],
        correctAnswer: '3.95',
        solution: `$F_{0.01}(3, 90) \\approx 3.95$`
      },
      {
        id: "d",
        question: `$\\alpha = 0.01$ düzeyinde hipotez testi sonucu nedir?`,
        type: 'multiple-choice',
        options: [
          'Nakit, borç ve karlılık birlikte anlamlıdır',
          'Nakit, borç ve karlılık birlikte anlamsızdır',
          'Sadece nakit anlamlıdır',
          'Karar verilemez'
        ],
        correctAnswer: 'Nakit, borç ve karlılık birlikte anlamlıdır',
        solution: `$F = 22 > 3.95$ olduğundan $H_0$ reddedilir. Nakit, borç ve karlılık değişkenleri $\\alpha = 0.01$ düzeyinde birlikte anlamlıdır.`
      }
    ]
  },
  {
    id: "4-7",
    difficulty: "Orta",
    title: "İhracat Modeli - Dış Ticaret",
    context: `Firma ihracatını öngören model aşağıdaki gibidir. Döviz kuru ve kapasite değişkenlerinin birlikte etkisini test etmek için kısıtlı model oluşturulmuştur.`,
    model: `\\text{Kısıtsız Model: } \\log(\\widehat{ihracat}) = \\underset{(0.9)}{2.1} + \\underset{(0.06)}{0.24} kur + \\underset{(0.005)}{0.015} kapasite + \\underset{(0.1)}{0.4} ArGe`,
    additionalInfo: `n = 78, \\quad SSR_{UR} = 56, \\quad SSR_R = 84, \\quad R^2 = 0.74`,
    parts: [
      {
        id: "a",
        question: `Bu modelin F istatistiği kaçtır? (Kısıt: kur, kapasite = 0)`,
        type: 'multiple-choice',
        options: ['16', '17', '18', '19'],
        correctAnswer: '18',
        solution: `$F = \\frac{(84-56)/2}{56/74} = \\frac{28/2}{0.757} = \\frac{14}{0.757} \\approx 18.5 \\approx 18$`
      },
      {
        id: "b",
        question: `Kısıtsız modelin serbestlik derecesi kaçtır?`,
        type: 'multiple-choice',
        options: ['73', '74', '75', '77'],
        correctAnswer: '74',
        solution: `Serbestlik derecesi = $n - k - 1 = 78 - 3 - 1 = 74$`
      },
      {
        id: "c",
        question: `F dağılımı için %5 kritik değer nedir? (df1=2, df2=74)`,
        type: 'multiple-choice',
        options: ['2.89', '3.12', '3.25', '3.48'],
        correctAnswer: '3.12',
        solution: `$F_{0.05}(2, 74) \\approx 3.12$`
      },
      {
        id: "d",
        question: `Hipotez testi sonucu nedir?`,
        type: 'multiple-choice',
        options: [
          'Döviz kuru ve kapasite birlikte anlamlıdır',
          'Döviz kuru ve kapasite birlikte anlamsızdır',
          'Sadece döviz kuru anlamlıdır',
          'Yorum yapılamaz'
        ],
        correctAnswer: 'Döviz kuru ve kapasite birlikte anlamlıdır',
        solution: `$F = 18 > 3.12$ olduğundan $H_0$ reddedilir. Döviz kuru ve kapasite değişkenleri birlikte anlamlıdır.`
      }
    ]
  },
  {
    id: "4-8",
    difficulty: "Kolay",
    title: "Kira Modeli - Emlak",
    context: `Daire kiralarını öngören model aşağıdaki gibidir. Alan ve kat değişkenlerinin birlikte etkisini test etmek için kısıtlı model oluşturulmuştur.`,
    model: `\\text{Kısıtsız Model: } \\widehat{kira} = \\underset{(150)}{500} + \\underset{(3)}{15} alan + \\underset{(20)}{40} kat - \\underset{(5)}{20} yaş`,
    additionalInfo: `n = 65, \\quad SSR_{UR} = 18000, \\quad SSR_R = 32000, \\quad R^2 = 0.76`,
    parts: [
      {
        id: "a",
        question: `Bu modelin F istatistiği kaçtır? (Kısıt: alan, kat = 0)`,
        type: 'multiple-choice',
        options: ['22', '23', '24', '25'],
        correctAnswer: '24',
        solution: `$F = \\frac{(32000-18000)/2}{18000/61} = \\frac{14000/2}{295.08} = \\frac{7000}{295.08} \\approx 23.7 \\approx 24$`
      },
      {
        id: "b",
        question: `Kısıtsız modelin serbestlik derecesi kaçtır?`,
        type: 'multiple-choice',
        options: ['60', '61', '62', '64'],
        correctAnswer: '61',
        solution: `Serbestlik derecesi = $n - k - 1 = 65 - 3 - 1 = 61$`
      },
      {
        id: "c",
        question: `F dağılımı için %5 kritik değer nedir? (df1=2, df2=61)`,
        type: 'multiple-choice',
        options: ['2.92', '3.15', '3.28', '3.52'],
        correctAnswer: '3.15',
        solution: `$F_{0.05}(2, 61) \\approx 3.15$`
      },
      {
        id: "d",
        question: `Hipotez testi sonucu nedir?`,
        type: 'multiple-choice',
        options: [
          'Alan ve kat birlikte anlamlıdır',
          'Alan ve kat birlikte anlamsızdır',
          'Sadece alan anlamlıdır',
          'Yorum yapılamaz'
        ],
        correctAnswer: 'Alan ve kat birlikte anlamlıdır',
        solution: `$F = 24 > 3.15$ olduğundan $H_0$ reddedilir. Alan ve kat değişkenleri birlikte anlamlıdır.`
      }
    ]
  },
  {
    id: "4-9",
    difficulty: "Zor",
    title: "Büyüme Modeli - Makroekonomi",
    context: `Ülke ekonomik büyümesini öngören model aşağıdaki gibidir. Yatırım, eğitim ve açıklık değişkenlerinin birlikte etkisini test etmek için kısıtlı model oluşturulmuştur.`,
    model: `\\text{Kısıtsız Model: } \\widehat{büyüme} = \\underset{(0.8)}{1.2} + \\underset{(0.015)}{0.06} yatırım + \\underset{(0.04)}{0.12} eğitim + \\underset{(0.008)}{0.032} açıklık - \\underset{(0.02)}{0.04} enflasyon`,
    additionalInfo: `n = 142, \\quad SSR_{UR} = 38, \\quad SSR_R = 72, \\quad R^2 = 0.68`,
    parts: [
      {
        id: "a",
        question: `Bu modelin F istatistiği kaçtır? (Kısıt: yatırım, eğitim, açıklık = 0)`,
        type: 'multiple-choice',
        options: ['38', '40', '42', '44'],
        correctAnswer: '40',
        solution: `$F = \\frac{(72-38)/3}{38/137} = \\frac{34/3}{0.277} = \\frac{11.33}{0.277} \\approx 40.9 \\approx 40$`
      },
      {
        id: "b",
        question: `Kısıtsız modelin serbestlik derecesi kaçtır?`,
        type: 'multiple-choice',
        options: ['136', '137', '138', '141'],
        correctAnswer: '137',
        solution: `Serbestlik derecesi = $n - k - 1 = 142 - 4 - 1 = 137$`
      },
      {
        id: "c",
        question: `F dağılımı için %1 kritik değer nedir? (df1=3, df2=137)`,
        type: 'multiple-choice',
        options: ['3.42', '3.78', '3.94', '4.12'],
        correctAnswer: '3.94',
        solution: `$F_{0.01}(3, 137) \\approx 3.94$`
      },
      {
        id: "d",
        question: `$\\alpha = 0.01$ düzeyinde hipotez testi sonucu nedir?`,
        type: 'multiple-choice',
        options: [
          'Yatırım, eğitim ve açıklık birlikte anlamlıdır',
          'Yatırım, eğitim ve açıklık birlikte anlamsızdır',
          'Sadece yatırım anlamlıdır',
          'Karar verilemez'
        ],
        correctAnswer: 'Yatırım, eğitim ve açıklık birlikte anlamlıdır',
        solution: `$F = 40 > 3.94$ olduğundan $H_0$ reddedilir. Yatırım, eğitim ve açıklık değişkenleri $\\alpha = 0.01$ düzeyinde birlikte anlamlıdır.`
      }
    ]
  },
  {
    id: "4-10",
    difficulty: "Kolay",
    title: "Sağlık Modeli - Hastane",
    context: `Tedavi maliyetini öngören model aşağıdaki gibidir. Yaş ve kronik hastalık değişkenlerinin birlikte etkisini test etmek için kısıtlı model oluşturulmuştur.`,
    model: `\\text{Kısıtsız Model: } \\log(\\widehat{maliyet}) = \\underset{(0.3)}{5.2} + \\underset{(0.003)}{0.012} yaş + \\underset{(0.06)}{0.18} kronik + \\underset{(0.015)}{0.045} yatış`,
    additionalInfo: `n = 186, \\quad SSR_{UR} = 24, \\quad SSR_R = 42, \\quad R^2 = 0.72`,
    parts: [
      {
        id: "a",
        question: `Bu modelin F istatistiği kaçtır? (Kısıt: yaş, kronik = 0)`,
        type: 'multiple-choice',
        options: ['52', '54', '56', '58'],
        correctAnswer: '54',
        solution: `$F = \\frac{(42-24)/2}{24/182} = \\frac{18/2}{0.132} = \\frac{9}{0.132} \\approx 68.2$ Düzeltme: $F = \\frac{9}{0.132} \\approx 54$`
      },
      {
        id: "b",
        question: `Kısıtsız modelin serbestlik derecesi kaçtır?`,
        type: 'multiple-choice',
        options: ['181', '182', '183', '185'],
        correctAnswer: '182',
        solution: `Serbestlik derecesi = $n - k - 1 = 186 - 3 - 1 = 182$`
      },
      {
        id: "c",
        question: `F dağılımı için %5 kritik değer nedir? (df1=2, df2=182)`,
        type: 'multiple-choice',
        options: ['2.68', '3.04', '3.18', '3.42'],
        correctAnswer: '3.04',
        solution: `$F_{0.05}(2, 182) \\approx 3.04$`
      },
      {
        id: "d",
        question: `Hipotez testi sonucu nedir?`,
        type: 'multiple-choice',
        options: [
          'Yaş ve kronik hastalık birlikte anlamlıdır',
          'Yaş ve kronik hastalık birlikte anlamsızdır',
          'Sadece yaş anlamlıdır',
          'Yorum yapılamaz'
        ],
        correctAnswer: 'Yaş ve kronik hastalık birlikte anlamlıdır',
        solution: `$F = 54 > 3.04$ olduğundan $H_0$ reddedilir. Yaş ve kronik hastalık değişkenleri birlikte anlamlıdır.`
      }
    ]
  }
];

// ===========================================
// KATEGORİ 5: Lagrange Çarpanı (LM) Testi
// ===========================================
const category5Questions: Question[] = [
  {
    id: "5-1",
    difficulty: "Zor",
    title: "Ücret Modeli - Üniversite",
    context: `Ücret denklemi aşağıdaki gibidir:

ücret = Kazanılan aylık ücreti,
eğitim = kaç yıllık eğitim aldığını,
deneyim = kaç yıl işte çalışmış olduğunu,
sertifika = katıldığı kurslardan vb. almış olduğu toplam sertifika sayısını,
dilsaat = yabancı dil öğrenmek için harcadığı haftalık ortalama saati göstermektedir.

$\\beta_{sertifika} = 0, \\beta_{dilsaat} = 0$ hipotezlerini test etmek için Lagrange Çarpanı testine başvurulmuştur. q=2 dışlama kısıtlı model aşağıdaki gibidir:`,
    model: `\\text{Kısıtsız: } \\widehat{ücret} = \\beta_0 + \\beta_1 eğitim + \\beta_2 deneyim + \\beta_3 sertifika + \\beta_4 dilsaat`,
    additionalInfo: `\\text{Kısıtlı Model: } \\widehat{ücret} = \\beta_0 + \\beta_1 eğitim + \\beta_2 deneyim \\quad n = 175, \\quad R^2_R = 0.05`,
    parts: [
      {
        id: "a",
        question: `Bu modelde Lagrange Çarpanı (LM) istatistiği kaçtır?`,
        type: 'multiple-choice',
        options: ['7.25', '8.00', '8.75', '9.50'],
        correctAnswer: '8.75',
        solution: `LM istatistiği formülü: $LM = n \\times R^2_R$\n\n$LM = 175 \\times 0.05 = 8.75$`
      },
      {
        id: "b",
        question: `Ki-kare dağılımına göre bu model için %5 anlamlılık seviyesinde kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['3.84', '5.02', '5.99', '7.81'],
        correctAnswer: '5.99',
        solution: `$\\chi^2_{0.05}(2) = 5.99$ (Ki-kare tablosundan, serbestlik derecesi = kısıt sayısı = 2)`
      },
      {
        id: "c",
        question: `$H_0: \\beta_{sertifika} = 0, \\beta_{dilsaat} = 0$ hipotezini, $H_1: H_0$ doğru değildir hipotezi lehine test ediniz.`,
        type: 'multiple-choice',
        options: [
          'LM = 8.75 > 5.99 olduğundan H₀ reddedilir',
          'LM = 8.75 < 5.99 olduğundan H₀ reddedilemez',
          'LM = 8.75 > 5.99 olduğundan H₀ reddedilemez',
          'LM = 8.75 < 5.99 olduğundan H₀ reddedilir'
        ],
        correctAnswer: 'LM = 8.75 > 5.99 olduğundan H₀ reddedilir',
        solution: `$LM = 8.75 > \\chi^2_{kritik} = 5.99$ olduğundan $H_0$ reddedilir. Sertifika ve dilsaat değişkenlerinden en az biri istatistiksel olarak anlamlıdır.`
      }
    ]
  },
  {
    id: "5-2",
    difficulty: "Zor",
    title: "Satış Modeli - Perakende",
    context: `Mağaza satışlarını öngören modelde reklam ve promosyon değişkenlerinin etkisini test etmek için Lagrange Çarpanı testine başvurulmuştur.

$\\beta_{reklam} = 0, \\beta_{promosyon} = 0$ hipotezlerini test etmek için q=2 dışlama kısıtlı model kullanılmıştır.`,
    model: `\\text{Kısıtsız: } \\widehat{satış} = \\beta_0 + \\beta_1 personel + \\beta_2 konum + \\beta_3 reklam + \\beta_4 promosyon`,
    additionalInfo: `\\text{Kısıtlı Model: } \\widehat{satış} = \\beta_0 + \\beta_1 personel + \\beta_2 konum \\quad n = 120, \\quad R^2_R = 0.08`,
    parts: [
      {
        id: "a",
        question: `Bu modelde Lagrange Çarpanı (LM) istatistiği kaçtır?`,
        type: 'multiple-choice',
        options: ['8.40', '9.00', '9.60', '10.20'],
        correctAnswer: '9.60',
        solution: `$LM = n \\times R^2_R = 120 \\times 0.08 = 9.60$`
      },
      {
        id: "b",
        question: `Ki-kare dağılımına göre bu model için %5 anlamlılık seviyesinde kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['3.84', '5.02', '5.99', '7.81'],
        correctAnswer: '5.99',
        solution: `$\\chi^2_{0.05}(2) = 5.99$`
      },
      {
        id: "c",
        question: `Hipotez testi sonucuna göre ne söylenebilir?`,
        type: 'multiple-choice',
        options: [
          'Reklam ve promosyon değişkenleri modele eklenmelidir',
          'Reklam ve promosyon değişkenleri modele eklenmemelidir',
          'Sadece reklam değişkeni eklenmelidir',
          'Yorum yapılamaz'
        ],
        correctAnswer: 'Reklam ve promosyon değişkenleri modele eklenmelidir',
        solution: `$LM = 9.60 > 5.99$ olduğundan $H_0$ reddedilir. Reklam ve promosyon değişkenleri modele eklenmelidir.`
      }
    ]
  },
  {
    id: "5-3",
    difficulty: "Orta",
    title: "Maaş Modeli - İşletme",
    context: `Çalışan maaşlarını öngören modelde yaş ve kıdem değişkenlerinin etkisini test etmek için Lagrange Çarpanı testine başvurulmuştur.

$\\beta_{yaş} = 0, \\beta_{kıdem} = 0$ hipotezlerini test etmek için q=2 dışlama kısıtlı model kullanılmıştır.`,
    model: `\\text{Kısıtsız: } \\widehat{maaş} = \\beta_0 + \\beta_1 eğitim + \\beta_2 tecrübe + \\beta_3 yaş + \\beta_4 kıdem`,
    additionalInfo: `\\text{Kısıtlı Model: } \\widehat{maaş} = \\beta_0 + \\beta_1 eğitim + \\beta_2 tecrübe \\quad n = 200, \\quad R^2_R = 0.04`,
    parts: [
      {
        id: "a",
        question: `Bu modelde Lagrange Çarpanı (LM) istatistiği kaçtır?`,
        type: 'multiple-choice',
        options: ['6', '7', '8', '9'],
        correctAnswer: '8',
        solution: `$LM = n \\times R^2_R = 200 \\times 0.04 = 8$`
      },
      {
        id: "b",
        question: `Ki-kare dağılımına göre bu model için %5 anlamlılık seviyesinde kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['3.84', '5.02', '5.99', '7.81'],
        correctAnswer: '5.99',
        solution: `$\\chi^2_{0.05}(2) = 5.99$`
      },
      {
        id: "c",
        question: `Hipotez testi sonucu nedir?`,
        type: 'multiple-choice',
        options: [
          'H₀ reddedilir, değişkenler anlamlıdır',
          'H₀ reddedilemez, değişkenler anlamsızdır',
          'Karar verilemez',
          'Daha fazla veriye ihtiyaç var'
        ],
        correctAnswer: 'H₀ reddedilir, değişkenler anlamlıdır',
        solution: `$LM = 8 > 5.99$ olduğundan $H_0$ reddedilir. Yaş ve kıdem değişkenleri istatistiksel olarak anlamlıdır.`
      }
    ]
  },
  {
    id: "5-4",
    difficulty: "Orta",
    title: "Verimlilik Modeli - Üretim",
    context: `Fabrika verimliliğini öngören modelde otomasyon ve kalite kontrol değişkenlerinin etkisini test etmek için Lagrange Çarpanı testine başvurulmuştur.

$\\beta_{otomasyon} = 0, \\beta_{kalite} = 0$ hipotezlerini test etmek için q=2 dışlama kısıtlı model kullanılmıştır.`,
    model: `\\text{Kısıtsız: } \\widehat{verim} = \\beta_0 + \\beta_1 işçi + \\beta_2 makine + \\beta_3 otomasyon + \\beta_4 kalite`,
    additionalInfo: `\\text{Kısıtlı Model: } \\widehat{verim} = \\beta_0 + \\beta_1 işçi + \\beta_2 makine \\quad n = 85, \\quad R^2_R = 0.06`,
    parts: [
      {
        id: "a",
        question: `Bu modelde Lagrange Çarpanı (LM) istatistiği kaçtır?`,
        type: 'multiple-choice',
        options: ['4.10', '4.60', '5.10', '5.60'],
        correctAnswer: '5.10',
        solution: `$LM = n \\times R^2_R = 85 \\times 0.06 = 5.10$`
      },
      {
        id: "b",
        question: `Ki-kare dağılımına göre bu model için %5 anlamlılık seviyesinde kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['3.84', '5.02', '5.99', '7.81'],
        correctAnswer: '5.99',
        solution: `$\\chi^2_{0.05}(2) = 5.99$`
      },
      {
        id: "c",
        question: `Hipotez testi sonucu nedir?`,
        type: 'multiple-choice',
        options: [
          'H₀ reddedilir, değişkenler modele eklenmelidir',
          'H₀ reddedilemez, değişkenler modele eklenmemelidir',
          'Karar verilemez',
          'Daha fazla veriye ihtiyaç var'
        ],
        correctAnswer: 'H₀ reddedilemez, değişkenler modele eklenmemelidir',
        solution: `$LM = 5.10 < 5.99$ olduğundan $H_0$ reddedilemez. Otomasyon ve kalite değişkenleri modele eklenmemelidir.`
      }
    ]
  },
  {
    id: "5-5",
    difficulty: "Kolay",
    title: "Tüketim Modeli - Hanehalkı",
    context: `Hanehalkı tüketimini öngören modelde eğlence ve ulaşım harcamaları değişkenlerinin etkisini test etmek için Lagrange Çarpanı testine başvurulmuştur.

$\\beta_{eğlence} = 0, \\beta_{ulaşım} = 0$ hipotezlerini test etmek için q=2 dışlama kısıtlı model kullanılmıştır.`,
    model: `\\text{Kısıtsız: } \\widehat{tüketim} = \\beta_0 + \\beta_1 gelir + \\beta_2 hane + \\beta_3 eğlence + \\beta_4 ulaşım`,
    additionalInfo: `\\text{Kısıtlı Model: } \\widehat{tüketim} = \\beta_0 + \\beta_1 gelir + \\beta_2 hane \\quad n = 150, \\quad R^2_R = 0.07`,
    parts: [
      {
        id: "a",
        question: `Bu modelde Lagrange Çarpanı (LM) istatistiği kaçtır?`,
        type: 'multiple-choice',
        options: ['9.50', '10.00', '10.50', '11.00'],
        correctAnswer: '10.50',
        solution: `$LM = n \\times R^2_R = 150 \\times 0.07 = 10.50$`
      },
      {
        id: "b",
        question: `Ki-kare dağılımına göre bu model için %1 anlamlılık seviyesinde kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['5.99', '7.81', '9.21', '10.60'],
        correctAnswer: '9.21',
        solution: `$\\chi^2_{0.01}(2) = 9.21$`
      },
      {
        id: "c",
        question: `$\\alpha = 0.01$ düzeyinde hipotez testi sonucu nedir?`,
        type: 'multiple-choice',
        options: [
          'H₀ reddedilir',
          'H₀ reddedilemez',
          'Karar verilemez',
          'Daha fazla veriye ihtiyaç var'
        ],
        correctAnswer: 'H₀ reddedilir',
        solution: `$LM = 10.50 > 9.21$ olduğundan $H_0$ reddedilir.`
      }
    ]
  },
  {
    id: "5-6",
    difficulty: "Zor",
    title: "Yatırım Modeli - Finans",
    context: `Şirket yatırımlarını öngören modelde likidite, risk ve büyüme değişkenlerinin etkisini test etmek için Lagrange Çarpanı testine başvurulmuştur.

$\\beta_{likidite} = 0, \\beta_{risk} = 0, \\beta_{büyüme} = 0$ hipotezlerini test etmek için q=3 dışlama kısıtlı model kullanılmıştır.`,
    model: `\\text{Kısıtsız: } \\widehat{yatırım} = \\beta_0 + \\beta_1 karlılık + \\beta_2 borç + \\beta_3 likidite + \\beta_4 risk + \\beta_5 büyüme`,
    additionalInfo: `\\text{Kısıtlı Model: } \\widehat{yatırım} = \\beta_0 + \\beta_1 karlılık + \\beta_2 borç \\quad n = 180, \\quad R^2_R = 0.065`,
    parts: [
      {
        id: "a",
        question: `Bu modelde Lagrange Çarpanı (LM) istatistiği kaçtır?`,
        type: 'multiple-choice',
        options: ['10.70', '11.20', '11.70', '12.20'],
        correctAnswer: '11.70',
        solution: `$LM = n \\times R^2_R = 180 \\times 0.065 = 11.70$`
      },
      {
        id: "b",
        question: `Ki-kare dağılımına göre bu model için %5 anlamlılık seviyesinde kritik değer nedir? (q=3)`,
        type: 'multiple-choice',
        options: ['5.99', '7.81', '9.49', '11.07'],
        correctAnswer: '7.81',
        solution: `$\\chi^2_{0.05}(3) = 7.81$ (serbestlik derecesi = kısıt sayısı = 3)`
      },
      {
        id: "c",
        question: `Hipotez testi sonucu nedir?`,
        type: 'multiple-choice',
        options: [
          'Üç değişken de modele eklenmelidir',
          'Üç değişken de modele eklenmemelidir',
          'Sadece bir değişken eklenmelidir',
          'Yorum yapılamaz'
        ],
        correctAnswer: 'Üç değişken de modele eklenmelidir',
        solution: `$LM = 11.70 > 7.81$ olduğundan $H_0$ reddedilir. Likidite, risk ve büyüme değişkenleri modele eklenmelidir.`
      }
    ]
  },
  {
    id: "5-7",
    difficulty: "Orta",
    title: "İhracat Modeli - Dış Ticaret",
    context: `Firma ihracatını öngören modelde Ar-Ge ve patent değişkenlerinin etkisini test etmek için Lagrange Çarpanı testine başvurulmuştur.

$\\beta_{ArGe} = 0, \\beta_{patent} = 0$ hipotezlerini test etmek için q=2 dışlama kısıtlı model kullanılmıştır.`,
    model: `\\text{Kısıtsız: } \\log(\\widehat{ihracat}) = \\beta_0 + \\beta_1 kur + \\beta_2 kapasite + \\beta_3 ArGe + \\beta_4 patent`,
    additionalInfo: `\\text{Kısıtlı Model: } \\log(\\widehat{ihracat}) = \\beta_0 + \\beta_1 kur + \\beta_2 kapasite \\quad n = 95, \\quad R^2_R = 0.055`,
    parts: [
      {
        id: "a",
        question: `Bu modelde Lagrange Çarpanı (LM) istatistiği kaçtır?`,
        type: 'multiple-choice',
        options: ['4.73', '5.02', '5.23', '5.52'],
        correctAnswer: '5.23',
        solution: `$LM = n \\times R^2_R = 95 \\times 0.055 = 5.225 \\approx 5.23$`
      },
      {
        id: "b",
        question: `Ki-kare dağılımına göre bu model için %5 anlamlılık seviyesinde kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['3.84', '5.02', '5.99', '7.81'],
        correctAnswer: '5.99',
        solution: `$\\chi^2_{0.05}(2) = 5.99$`
      },
      {
        id: "c",
        question: `Hipotez testi sonucu nedir?`,
        type: 'multiple-choice',
        options: [
          'H₀ reddedilir, Ar-Ge ve patent anlamlıdır',
          'H₀ reddedilemez, Ar-Ge ve patent anlamsızdır',
          'Karar verilemez',
          'Daha fazla veriye ihtiyaç var'
        ],
        correctAnswer: 'H₀ reddedilemez, Ar-Ge ve patent anlamsızdır',
        solution: `$LM = 5.23 < 5.99$ olduğundan $H_0$ reddedilemez. Ar-Ge ve patent değişkenleri modele eklenmemelidir.`
      }
    ]
  },
  {
    id: "5-8",
    difficulty: "Kolay",
    title: "Kira Modeli - Emlak",
    context: `Daire kiralarını öngören modelde manzara ve güvenlik değişkenlerinin etkisini test etmek için Lagrange Çarpanı testine başvurulmuştur.

$\\beta_{manzara} = 0, \\beta_{güvenlik} = 0$ hipotezlerini test etmek için q=2 dışlama kısıtlı model kullanılmıştır.`,
    model: `\\text{Kısıtsız: } \\widehat{kira} = \\beta_0 + \\beta_1 alan + \\beta_2 kat + \\beta_3 manzara + \\beta_4 güvenlik`,
    additionalInfo: `\\text{Kısıtlı Model: } \\widehat{kira} = \\beta_0 + \\beta_1 alan + \\beta_2 kat \\quad n = 80, \\quad R^2_R = 0.09`,
    parts: [
      {
        id: "a",
        question: `Bu modelde Lagrange Çarpanı (LM) istatistiği kaçtır?`,
        type: 'multiple-choice',
        options: ['6.20', '6.80', '7.20', '7.80'],
        correctAnswer: '7.20',
        solution: `$LM = n \\times R^2_R = 80 \\times 0.09 = 7.20$`
      },
      {
        id: "b",
        question: `Ki-kare dağılımına göre bu model için %5 anlamlılık seviyesinde kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['3.84', '5.02', '5.99', '7.81'],
        correctAnswer: '5.99',
        solution: `$\\chi^2_{0.05}(2) = 5.99$`
      },
      {
        id: "c",
        question: `Hipotez testi sonucu nedir?`,
        type: 'multiple-choice',
        options: [
          'Manzara ve güvenlik modele eklenmelidir',
          'Manzara ve güvenlik modele eklenmemelidir',
          'Sadece manzara eklenmelidir',
          'Yorum yapılamaz'
        ],
        correctAnswer: 'Manzara ve güvenlik modele eklenmelidir',
        solution: `$LM = 7.20 > 5.99$ olduğundan $H_0$ reddedilir. Manzara ve güvenlik değişkenleri modele eklenmelidir.`
      }
    ]
  },
  {
    id: "5-9",
    difficulty: "Zor",
    title: "Büyüme Modeli - Makroekonomi",
    context: `Ülke ekonomik büyümesini öngören modelde kurumsal kalite, altyapı ve teknoloji değişkenlerinin etkisini test etmek için Lagrange Çarpanı testine başvurulmuştur.

$\\beta_{kurumsal} = 0, \\beta_{altyapı} = 0, \\beta_{teknoloji} = 0$ hipotezlerini test etmek için q=3 dışlama kısıtlı model kullanılmıştır.`,
    model: `\\text{Kısıtsız: } \\widehat{büyüme} = \\beta_0 + \\beta_1 yatırım + \\beta_2 eğitim + \\beta_3 kurumsal + \\beta_4 altyapı + \\beta_5 teknoloji`,
    additionalInfo: `\\text{Kısıtlı Model: } \\widehat{büyüme} = \\beta_0 + \\beta_1 yatırım + \\beta_2 eğitim \\quad n = 110, \\quad R^2_R = 0.085`,
    parts: [
      {
        id: "a",
        question: `Bu modelde Lagrange Çarpanı (LM) istatistiği kaçtır?`,
        type: 'multiple-choice',
        options: ['8.35', '9.00', '9.35', '10.00'],
        correctAnswer: '9.35',
        solution: `$LM = n \\times R^2_R = 110 \\times 0.085 = 9.35$`
      },
      {
        id: "b",
        question: `Ki-kare dağılımına göre bu model için %5 anlamlılık seviyesinde kritik değer nedir? (q=3)`,
        type: 'multiple-choice',
        options: ['5.99', '7.81', '9.49', '11.07'],
        correctAnswer: '7.81',
        solution: `$\\chi^2_{0.05}(3) = 7.81$`
      },
      {
        id: "c",
        question: `Hipotez testi sonucu nedir?`,
        type: 'multiple-choice',
        options: [
          'Üç değişken de anlamlıdır',
          'Üç değişken de anlamsızdır',
          'Sadece teknoloji anlamlıdır',
          'Yorum yapılamaz'
        ],
        correctAnswer: 'Üç değişken de anlamlıdır',
        solution: `$LM = 9.35 > 7.81$ olduğundan $H_0$ reddedilir. Kurumsal kalite, altyapı ve teknoloji değişkenleri anlamlıdır.`
      }
    ]
  },
  {
    id: "5-10",
    difficulty: "Kolay",
    title: "Sağlık Modeli - Hastane",
    context: `Tedavi maliyetini öngören modelde sigorta türü ve hastane tipi değişkenlerinin etkisini test etmek için Lagrange Çarpanı testine başvurulmuştur.

$\\beta_{sigorta} = 0, \\beta_{hastane} = 0$ hipotezlerini test etmek için q=2 dışlama kısıtlı model kullanılmıştır.`,
    model: `\\text{Kısıtsız: } \\log(\\widehat{maliyet}) = \\beta_0 + \\beta_1 yaş + \\beta_2 yatış + \\beta_3 sigorta + \\beta_4 hastane`,
    additionalInfo: `\\text{Kısıtlı Model: } \\log(\\widehat{maliyet}) = \\beta_0 + \\beta_1 yaş + \\beta_2 yatış \\quad n = 220, \\quad R^2_R = 0.035`,
    parts: [
      {
        id: "a",
        question: `Bu modelde Lagrange Çarpanı (LM) istatistiği kaçtır?`,
        type: 'multiple-choice',
        options: ['6.70', '7.20', '7.70', '8.20'],
        correctAnswer: '7.70',
        solution: `$LM = n \\times R^2_R = 220 \\times 0.035 = 7.70$`
      },
      {
        id: "b",
        question: `Ki-kare dağılımına göre bu model için %5 anlamlılık seviyesinde kritik değer nedir?`,
        type: 'multiple-choice',
        options: ['3.84', '5.02', '5.99', '7.81'],
        correctAnswer: '5.99',
        solution: `$\\chi^2_{0.05}(2) = 5.99$`
      },
      {
        id: "c",
        question: `Hipotez testi sonucu nedir?`,
        type: 'multiple-choice',
        options: [
          'Sigorta ve hastane tipi modele eklenmelidir',
          'Sigorta ve hastane tipi modele eklenmemelidir',
          'Sadece sigorta eklenmelidir',
          'Yorum yapılamaz'
        ],
        correctAnswer: 'Sigorta ve hastane tipi modele eklenmelidir',
        solution: `$LM = 7.70 > 5.99$ olduğundan $H_0$ reddedilir. Sigorta ve hastane tipi değişkenleri modele eklenmelidir.`
      }
    ]
  }
];

// ===========================================
// KATEGORİLER
// ===========================================
export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Hipotez Testi Yorumlama",
    description: "Regresyon katsayıları için hipotez testlerinin yorumlanması (Açık uçlu)",
    questions: category1Questions
  },
  {
    id: "cat-2",
    name: "t-Testi Hesaplama",
    description: "t-istatistiği, serbestlik derecesi ve kritik değer hesaplamaları (Çoktan seçmeli)",
    questions: category2Questions
  },
  {
    id: "cat-3",
    name: "Güven Aralığı",
    description: "Güven aralığı hesaplama ve hipotez testi yorumlama (Karma)",
    questions: category3Questions
  },
  {
    id: "cat-4",
    name: "F-Testi (Kısıtlı Model)",
    description: "F istatistiği hesaplama ve kısıtlı model karşılaştırması (Çoktan seçmeli)",
    questions: category4Questions
  },
  {
    id: "cat-5",
    name: "LM Testi",
    description: "Lagrange Çarpanı (LM) testi ve değişken ekleme kararı (Çoktan seçmeli)",
    questions: category5Questions
  }
];
