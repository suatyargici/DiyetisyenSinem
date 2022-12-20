import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "../components/Container";
// import logo from "../images/LOGO.png";

const Detail2 = () => {
  return (
    <div className="relative min-h-[600px] w-full  text-lg">
       <Helmet>
        <title>Diyetisyen Sinem Tan</title>
      </Helmet>
      <Container>
        <h1 className="mt-[30px] text-xl font-medium">
          Neden DİYETİSYEN SİNEM TAN?
        </h1>
        <p className="mt-[30px] text-justify">
          Yeditepe Üniversitesi'ndeki öğrenim hayatım ve edindiğim tecrübelerime
          dayanarak, diyet programlarının her aşamasının sadece diyetisyen
          tarafından hazırlanmaması gerektiğini düşünüyor ve bu sebeple tüm
          süreci birlikte yönetiyoruz. Klasik diyet listeleri yerine birçok
          farklı seçenek ve lezzetli menülerle hiçbir yasak/kısıtlama olmadan,
          sıkılmadan, keyif alarak sürdürebileceğiniz diyet programlarını size
          göre hazırlamaktayız. “Sizin için en doğru” beslenme düzenini
          keşfetmeniz ve doğru beslenme alışkanlıkları edinmeniz hedef kilonuz
          kadar önem taşımaktadır.
        </p>
        <h1 className="mt-[30px] text-xl font-medium">Süreç nasıl işliyor?</h1>
        <p className="z-30 mt-[30px] text-justify">
          Kişiye özel yüz yüze/online gebelik takip programımızda doktorunuzun
          onayı sonrası ilk olarak size gönderilen anamnez formunu doldurmanız
          gerekmektedir. Form sonucunuzla birlikte, hastalıklarınız, hastalık
          riskiniz, yaşam biçiminiz, çalışma şekliniz, uyku düzeniniz,
          yöresel/bölgesel alışkanlıklarınız gibi tüm unsurlar göz önüne
          alınarak haftalık olarak yenilenen SADECE SİZE ÖZEL bir diyet programı
          hazırlanmaktadır. İhtiyaç duyulması halinde bir takım gerekli kan
          değerlerine bakılması için mümkün olan en kısa sürede kan tahlili de
          istenecektir. İlk görüşmede 20 dakika süren sağlıklı beslenme eğitimi
          ücretsiz verilmektedir. Ayda bir kere yüz yüze/online şekilde kontrol
          görüşmesi yapılmaktadır. Görüşme öncesi evinizde bulunan dijital
          baskül ve mezura ile alacağınız ölçüm sonuçları, görüşmede
          değerlendirilmektedir. Aylık kontrolün yanı sıra 12.00-21.00 saatleri
          arasında Whatsapp üzerinden soru sorabilir, porsiyon kontrolü için
          öğünlerinizin fotoğraflarını yollayabilirsiniz. Gebelikte tüketilmesi
          ve tüketilmemesi gereken besinler ve çok daha fazlasını içeren
          bilgilerin bulunduğu "Emzirme döneminde beslenme & Ek gıdaya geçiş
          (çocuk beslenmesi)" e-kitapçıları da hediye edilmektedir.
        </p>
        <h1 className="mt-[30px] text-xl font-medium">
          Planlı/plansız gebelikte diyet,
        </h1>
        <p className="mt-[30px]">
          Planlı gebelik öncesi kilo vermek hem bebek hem de kendiniz için daha
          sağlıklı ve verimli bir hamilelik süreci geçirmenizi sağlar. Plansız
          gebeliklerde ise hamile olduğunuzu öğrendiğiniz andan itibaren fazla
          kilonuz varsa hekim-diyetisyen kontrolünde kilo verebilirsiniz.
          Popüler diyetler, detokslar, uzun süreli açlıklar yerine diyetisyen ve
          hekiminizin ortak kararına uyulmalıdır.
        </p>
        <h1 className="mt-[30px] text-xl font-medium">
          Kilo artışı ne kadar olmalıdır?
        </h1>
        <p className="mt-[30px] text-justify">
          Hamilelik döneminde kilo artışı 10-14 kg'ı geçmemelidir. Hamileliğin
          ilk üç ayında 1-2 kg artış normaldir. İkinci üç ayında (4-6 ay)
          bebeğin büyüme ve gelişimi hızlandığı için 5-6 kg'lık artış görülür.
          Son üç aylık dönemde 4-5 kg kilo artışıyla hamilelik sonlanır.
        </p>
        <p className="mt-[30px]">Hamilelik döneminde diyet ve beslenme danışmanlığında temel amaç,</p>
        <ul className="ml-8 mt-3 mb-5">
          <li>Annenin ve bebeğin ihtiyacı olan tüm vitamin, mineral ve diğer besin öğelerinin yeterli miktarda almak.</li>
          <li> Gereksiz kilo alımını engellemek.</li>
          <li>En sağlıklı ağırlık ile annenin doğuma gitmesini sağlamak.</li>
        </ul>
        {/* <img
          src={logo}
          alt="logo"
          className="max-w-[500px]max-h-[500px] absolute left-[40%] [@media_(max-width:768px)]:left-[10%] top-[30%] -z-10"
        /> */}
      </Container>
    </div>
  );
};

export default Detail2;
