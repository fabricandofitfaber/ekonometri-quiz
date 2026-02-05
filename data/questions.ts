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
    context: `Bir evin satış fiyatını etkileyen faktörleri inceleyen model aşağıdadır. "fiyat" satış fiyatını (bin TL), "metrekare" evin büyüklüğünü, "oda" oda sayısını, "merkez" şehir merkezine uzaklığı (km) göstermektedir.`,
    model: `\\text{fiyat} = \\beta_0 + \\beta_1 \\text{metrekare} + \\beta_2 \\text{oda} + \\beta_3 \\text{merkez} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_3 = 0$ hipotezi ne anlama gelmektedir?`,
        type: 'open-ended',
        solution: `$H_0: \\beta_3 = 0$ hipotezi, metrekare ve oda sayısı sabitken, şehir merkezine uzaklığın ev fiyatı üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder.`
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
    model: `\\widehat{GANO} = 1.292 + 0.014 \\text{ekonsaat} - 0.013 \\text{videosaat} + 0.21 \\log(\\text{liseMO})`,
    additionalInfo: `\\begin{array}{cccc} & (0.075) & (0.007) & (0.0052) & (0.07) \\end{array} \\quad n = 33, \\quad R^2 = 0.278`,
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
        question: `Bu model için çift yönlü testte, anlamlılık düzeyi $\\alpha = 0.05$ için kritik değer nedir? (cevap=2.04)`,
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
    model: `\\widehat{\\text{maaş}} = 2850 + 185 \\text{tecrübe} + 320 \\text{eğitim} + 1250 \\log(\\text{yaş})`,
    additionalInfo: `\\begin{array}{cccc} & (420) & (37) & (80) & (312.5) \\end{array} \\quad n = 48, \\quad R^2 = 0.412`,
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
    model: `\\widehat{\\text{satış}} = 45 + 3.6 \\text{reklam} + 2.1 \\text{personel} - 1.8 \\text{konum}`,
    additionalInfo: `\\begin{array}{cccc} & (12) & (1.2) & (0.7) & (0.6) \\end{array} \\quad n = 28, \\quad R^2 = 0.523`,
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
    model: `\\widehat{\\text{verim}} = 120 + 8.4 \\text{makine} + 2.8 \\text{işçi} + 0.14 \\text{enerji}`,
    additionalInfo: `\\begin{array}{cccc} & (25) & (2.1) & (0.7) & (0.07) \\end{array} \\quad n = 42, \\quad R^2 = 0.645`,
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
    model: `\\widehat{\\text{tüketim}} = 1.85 + 0.72 \\text{gelir} + 0.45 \\text{fert} - 0.18 \\log(\\text{tasarruf})`,
    additionalInfo: `\\begin{array}{cccc} & (0.42) & (0.12) & (0.15) & (0.06) \\end{array} \\quad n = 56, \\quad R^2 = 0.712`,
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
    model: `\\widehat{\\text{yatırım}} = -2.35 + 0.28 \\text{nakit} - 0.045 \\text{borç} + 1.85 \\log(\\text{aktif})`,
    additionalInfo: `\\begin{array}{cccc} & (1.12) & (0.04) & (0.015) & (0.37) \\end{array} \\quad n = 65, \\quad R^2 = 0.534`,
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
    model: `\\log(\\widehat{\\text{ihracat}}) = 2.15 + 0.32 \\text{kur} + 0.024 \\text{kapasite} + 0.48 \\log(\\text{ArGe})`,
    additionalInfo: `\\begin{array}{cccc} & (0.85) & (0.08) & (0.008) & (0.12) \\end{array} \\quad n = 72, \\quad R^2 = 0.623`,
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
        question: `Kapasite değişkeni $\\alpha = 0.05$ düzeyinde anlamlı mıdır? (kritik değer ≈ 2.00)`,
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
    model: `\\widehat{\\text{kira}} = 850 + 32 \\text{alan} + 45 \\text{kat} - 28 \\text{bina\\_yaşı}`,
    additionalInfo: `\\begin{array}{cccc} & (185) & (8) & (22.5) & (7) \\end{array} \\quad n = 38, \\quad R^2 = 0.687`,
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
    model: `\\widehat{\\text{büyüme}} = 3.42 + 0.18 \\text{yatırım} - 0.12 \\text{enflasyon} + 0.85 \\log(\\text{nüfus})`,
    additionalInfo: `\\begin{array}{cccc} & (1.25) & (0.03) & (0.04) & (0.17) \\end{array} \\quad n = 85, \\quad R^2 = 0.478`,
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
    model: `\\widehat{\\text{gün}} = 1.2 + 0.08 \\text{yaş} + 1.5 \\text{kronik} + 3.2 \\text{ameliyat}`,
    additionalInfo: `\\begin{array}{cccc} & (0.45) & (0.02) & (0.375) & (0.8) \\end{array} \\quad n = 120, \\quad R^2 = 0.562`,
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
  }
];
