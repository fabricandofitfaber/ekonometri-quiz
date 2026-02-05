export interface Question {
  id: string;
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  title: string;
  context: string;
  model: string;
  parts: {
    id: string;
    question: string;
    solution: string;
  }[];
}

export const questions: Question[] = [
  {
    id: "1",
    difficulty: "Kolay",
    title: "Maaş Belirleyicileri",
    context: `Bir çalışanın aylık maaşının belirleyicilerini inceleyen model aşağıdaki gibidir. "maaş" aylık maaşı (TL), "tecrübe" iş tecrübesini (yıl), "eğitim" eğitim süresini (yıl), "yaş" ise çalışanın yaşını göstermektedir.`,
    model: `\\text{maaş} = \\beta_0 + \\beta_1 \\text{tecrübe} + \\beta_2 \\text{eğitim} + \\beta_3 \\text{yaş} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_2 = 0$ hipotezi ne anlama gelmektedir?`,
        solution: `$H_0: \\beta_2 = 0$ hipotezi, tecrübe ve yaş sabitken, eğitim süresinin maaş üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder.`
      },
      {
        id: "b",
        question: `$t_{\\beta_2} > c$ ise, $\\beta_2$ için ne söylersiniz?`,
        solution: `$t_{\\beta_2} > c$ ise, $H_0$ reddedilir. Eğitim süresinin maaş üzerinde istatistiksel olarak anlamlı ve pozitif bir etkisi vardır.`
      }
    ]
  },
  {
    id: "2",
    difficulty: "Kolay",
    title: "Ev Fiyatları",
    context: `Bir evin satış fiyatını etkileyen faktörleri inceleyen model aşağıdadır. "fiyat" satış fiyatını (bin TL), "metrekare" evin büyüklüğünü, "oda" oda sayısını, "merkez" şehir merkezine uzaklığı (km) göstermektedir.`,
    model: `\\text{fiyat} = \\beta_0 + \\beta_1 \\text{metrekare} + \\beta_2 \\text{oda} + \\beta_3 \\text{merkez} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_3 = 0$ hipotezi ne anlama gelmektedir?`,
        solution: `$H_0: \\beta_3 = 0$ hipotezi, metrekare ve oda sayısı sabitken, şehir merkezine uzaklığın ev fiyatı üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder.`
      },
      {
        id: "b",
        question: `$t_{\\beta_3} < -c$ ise, $\\beta_3$ için ne söylersiniz?`,
        solution: `$t_{\\beta_3} < -c$ ise, $H_0$ reddedilir. Şehir merkezine uzaklığın ev fiyatı üzerinde istatistiksel olarak anlamlı ve negatif bir etkisi vardır (uzaklık arttıkça fiyat düşer).`
      }
    ]
  },
  {
    id: "3",
    difficulty: "Kolay",
    title: "Sınav Başarısı",
    context: `Öğrencilerin sınav başarısını etkileyen faktörleri inceleyen model aşağıdadır. "not" sınav notunu, "çalışma" haftalık çalışma saatini, "devam" derse devam oranını (%), "uyku" günlük uyku saatini göstermektedir.`,
    model: `\\text{not} = \\beta_0 + \\beta_1 \\text{çalışma} + \\beta_2 \\text{devam} + \\beta_3 \\text{uyku} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_1 = 0$ hipotezi ne anlama gelmektedir?`,
        solution: `$H_0: \\beta_1 = 0$ hipotezi, devam oranı ve uyku saati sabitken, haftalık çalışma saatinin sınav notu üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder.`
      },
      {
        id: "b",
        question: `$|t_{\\beta_1}| > c$ ise, $\\beta_1$ için ne söylersiniz?`,
        solution: `$|t_{\\beta_1}| > c$ ise, $H_0$ reddedilir. Haftalık çalışma saatinin sınav notu üzerinde istatistiksel olarak anlamlı bir etkisi vardır (iki yönlü test).`
      }
    ]
  },
  {
    id: "4",
    difficulty: "Orta",
    title: "İhracat Performansı",
    context: `Bir firmanın ihracat performansını inceleyen model aşağıdadır. "ihracat" ihracat değerini (milyon $), "kur" döviz kurunu, "verimlilik" işgücü verimliliğini, "enerji" enerji maliyetini göstermektedir.`,
    model: `\\log(\\text{ihracat}) = \\beta_0 + \\beta_1 \\text{kur} + \\beta_2 \\text{verimlilik} + \\beta_3 \\text{enerji} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_1 = 0$ hipotezi ne anlama gelmektedir? Modelin fonksiyonel formunu da dikkate alarak yorumlayınız.`,
        solution: `$H_0: \\beta_1 = 0$ hipotezi, verimlilik ve enerji maliyeti sabitken, döviz kurunun ihracat üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder. Model log-lineer olduğundan, kurdaki bir birimlik değişim ihracatta $\\beta_1 \\times 100$ yüzdelik değişime yol açar.`
      },
      {
        id: "b",
        question: `$t_{\\beta_1} > c$ ise, $\\beta_1$ için ne söylersiniz?`,
        solution: `$t_{\\beta_1} > c$ ise, $H_0$ reddedilir. Döviz kurunun ihracat üzerinde istatistiksel olarak anlamlı ve pozitif bir etkisi vardır.`
      }
    ]
  },
  {
    id: "5",
    difficulty: "Orta",
    title: "Tarımsal Verim",
    context: `Tarımsal verimi etkileyen faktörleri inceleyen model aşağıdadır. "verim" hektar başına verimi (ton), "gübre" gübre kullanımını (kg/hektar), "sulama" sulama miktarını (m³), "tohum" tohum kalite endeksini göstermektedir.`,
    model: `\\log(\\text{verim}) = \\beta_0 + \\beta_1 \\log(\\text{gübre}) + \\beta_2 \\log(\\text{sulama}) + \\beta_3 \\text{tohum} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_1 = 0$ hipotezi ne anlama gelmektedir? Modelin fonksiyonel formunu da dikkate alarak yorumlayınız.`,
        solution: `$H_0: \\beta_1 = 0$ hipotezi, sulama ve tohum kalitesi sabitken, gübre kullanımının tarımsal verim üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder. Model log-log formunda olduğundan, $\\beta_1$ gübre kullanımının verim esnekliğini gösterir (gübredeki %1'lik artış verimde %$\\beta_1$'lik değişime yol açar).`
      },
      {
        id: "b",
        question: `$t_{\\beta_1} > c$ ise, $\\beta_1$ için ne söylersiniz?`,
        solution: `$t_{\\beta_1} > c$ ise, $H_0$ reddedilir. Gübre kullanımının verim üzerinde istatistiksel olarak anlamlı ve pozitif bir etkisi vardır.`
      }
    ]
  },
  {
    id: "6",
    difficulty: "Orta",
    title: "Kredi Temerrüt Oranı",
    context: `Bir bankanın kredi temerrüt oranını inceleyen model aşağıdadır. "temerrüt" temerrüt oranını (%), "faiz" faiz oranını, "gelir" ortalama müşteri gelirini (bin TL), "kredi_skoru" ortalama kredi skorunu göstermektedir.`,
    model: `\\text{temerrüt} = \\beta_0 + \\beta_1 \\text{faiz} + \\beta_2 \\text{gelir} + \\beta_3 \\text{kredi\\_skoru} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_2 = 0$ hipotezi ne anlama gelmektedir?`,
        solution: `$H_0: \\beta_2 = 0$ hipotezi, faiz oranı ve kredi skoru sabitken, müşteri gelirinin temerrüt oranı üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder.`
      },
      {
        id: "b",
        question: `$t_{\\beta_2} < -c$ ise, $\\beta_2$ için ne söylersiniz? Ekonomik olarak bu sonucu yorumlayınız.`,
        solution: `$t_{\\beta_2} < -c$ ise, $H_0$ reddedilir. Müşteri gelirinin temerrüt oranı üzerinde istatistiksel olarak anlamlı ve negatif bir etkisi vardır. Ekonomik olarak, gelir arttıkça müşterilerin kredilerini geri ödeme kapasitesi artar ve temerrüt oranı düşer.`
      }
    ]
  },
  {
    id: "7",
    difficulty: "Orta",
    title: "Hava Kirliliği",
    context: `Bir şehirdeki hava kirliliğini inceleyen model aşağıdadır. "PM10" partikül madde yoğunluğunu (µg/m³), "trafik" trafik yoğunluğu endeksini, "sanayi" sanayi üretim endeksini, "yeşil" kişi başı yeşil alan miktarını (m²) göstermektedir.`,
    model: `\\text{PM10} = \\beta_0 + \\beta_1 \\text{trafik} + \\beta_2 \\text{sanayi} + \\beta_3 \\text{yeşil} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_3 = 0$ hipotezi ne anlama gelmektedir?`,
        solution: `$H_0: \\beta_3 = 0$ hipotezi, trafik ve sanayi üretimi sabitken, yeşil alan miktarının hava kirliliği üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder.`
      },
      {
        id: "b",
        question: `$t_{\\beta_3} < -c$ ise, $\\beta_3$ için ne söylersiniz? Çevre politikası açısından bu bulgunun önemi nedir?`,
        solution: `$t_{\\beta_3} < -c$ ise, $H_0$ reddedilir. Yeşil alan miktarının hava kirliliği üzerinde istatistiksel olarak anlamlı ve negatif bir etkisi vardır. Çevre politikası açısından, yeşil alanların artırılmasının hava kalitesini iyileştirmede etkili bir araç olduğu sonucuna varılır.`
      }
    ]
  },
  {
    id: "8",
    difficulty: "Zor",
    title: "Ekonomik Büyüme",
    context: `Bir ülkenin ekonomik büyümesini inceleyen model aşağıdadır. "büyüme" GSYİH büyüme oranını (%), "yatırım" yatırım/GSYİH oranını, "eğitim" ortalama eğitim yılını, "açıklık" ticari açıklık endeksini göstermektedir.`,
    model: `\\text{büyüme} = \\beta_0 + \\beta_1 \\text{yatırım} + \\beta_2 \\text{eğitim} + \\beta_3 \\text{açıklık} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_1 = 0$ ve $H_0: \\beta_2 = 0$ hipotezlerini ayrı ayrı yorumlayınız.`,
        solution: `$H_0: \\beta_1 = 0$: Eğitim ve ticari açıklık sabitken, yatırım oranının ekonomik büyüme üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder.\n\n$H_0: \\beta_2 = 0$: Yatırım ve ticari açıklık sabitken, eğitim düzeyinin ekonomik büyüme üzerinde istatistiksel olarak anlamlı bir etkisinin olmadığını ifade eder.`
      },
      {
        id: "b",
        question: `Her iki hipotez için de $|t| > c$ bulunmuşsa, politika yapıcılara ne önerirsiniz?`,
        solution: `Her iki hipotez de reddedildiğinden, hem yatırımların hem de eğitimin ekonomik büyüme üzerinde anlamlı etkileri vardır. Politika yapıcılara hem fiziksel sermaye yatırımlarını teşvik etmeleri hem de beşeri sermayeyi geliştirmek için eğitime yatırım yapmaları önerilir.`
      }
    ]
  },
  {
    id: "9",
    difficulty: "Zor",
    title: "E-Ticaret Satışları",
    context: `Bir e-ticaret sitesinin satışlarını inceleyen model aşağıdadır. "satış" günlük satış tutarını (bin TL), "ziyaretçi" günlük ziyaretçi sayısını, "reklam" reklam harcamasını (TL), "indirim" ortalama indirim oranını (%) göstermektedir.`,
    model: `\\log(\\text{satış}) = \\beta_0 + \\beta_1 \\log(\\text{ziyaretçi}) + \\beta_2 \\log(\\text{reklam}) + \\beta_3 \\text{indirim} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_1 = 1$ hipotezi ne anlama gelmektedir? (Dikkat: $\\beta_1 = 0$ değil!)`,
        solution: `$H_0: \\beta_1 = 1$ hipotezi, ziyaretçi sayısındaki yüzdesel değişimin satışlarda birebir aynı oranda yüzdesel değişime yol açtığını (birim esneklik) ifade eder. Yani ziyaretçi sayısı %1 artarsa satışlar da tam olarak %1 artar.`
      },
      {
        id: "b",
        question: `$t = \\frac{\\hat{\\beta}_1 - 1}{se(\\hat{\\beta}_1)} > c$ ise ne söylersiniz?`,
        solution: `$t > c$ ise, $H_0$ reddedilir. Ziyaretçi esnekliği 1'den farklıdır. Eğer $\\hat{\\beta}_1 > 1$ ise ziyaretçi artışı satışları oransal olarak daha fazla artırır (ölçeğe göre artan getiri), $\\hat{\\beta}_1 < 1$ ise daha az artırır (ölçeğe göre azalan getiri).`
      }
    ]
  },
  {
    id: "10",
    difficulty: "Zor",
    title: "Hastane Maliyetleri",
    context: `Bir hastanede tedavi maliyetlerini inceleyen model aşağıdadır. "maliyet" tedavi maliyetini (TL), "gün" yatış süresini, "yaş" hasta yaşını, "kronik" kronik hastalık sayısını göstermektedir.`,
    model: `\\log(\\text{maliyet}) = \\beta_0 + \\beta_1 \\text{gün} + \\beta_2 \\text{yaş} + \\beta_3 \\text{kronik} + u`,
    parts: [
      {
        id: "a",
        question: `$H_0: \\beta_2 = \\beta_3$ hipotezi ne anlama gelmektedir?`,
        solution: `$H_0: \\beta_2 = \\beta_3$ hipotezi, yaştaki bir birimlik artışın maliyet üzerindeki yüzdesel etkisinin, kronik hastalık sayısındaki bir birimlik artışın etkisine eşit olduğunu ifade eder. Yani yaş ve kronik hastalık sayısının maliyet üzerindeki marjinal etkileri aynıdır.`
      },
      {
        id: "b",
        question: `Bu hipotezi test etmek için nasıl bir t-istatistiği oluşturulur?`,
        solution: `t-istatistiği şu şekilde oluşturulur:\n$$t = \\frac{\\hat{\\beta}_2 - \\hat{\\beta}_3}{se(\\hat{\\beta}_2 - \\hat{\\beta}_3)}$$\n\nPaydadaki standart hata: $se(\\hat{\\beta}_2 - \\hat{\\beta}_3) = \\sqrt{Var(\\hat{\\beta}_2) + Var(\\hat{\\beta}_3) - 2Cov(\\hat{\\beta}_2, \\hat{\\beta}_3)}$`
      }
    ]
  }
];
