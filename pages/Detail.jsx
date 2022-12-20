import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "../components/Container";
// import logo from "../images/LOGO.png";

const Detail = () => {
  return (
    <div className="relative min-h-[600px] w-full text-lg">
       <Helmet>
        <title>Diyetisyen Sinem Tan</title>
      </Helmet>
      <Container>
        <h1 className="mt-[30px] text-xl font-medium" id="#Detail2">Neden DİYETİSYEN SİNEM TAN?</h1>
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
        <h1 className="mt-[30px] text-xl font-medium">Sürdürülebilirlik ve sürekli iletişim neden önemli?</h1>
        <p className="mt-[30px] z-30 text-justify">
          Eski moda diyet planı yerine sürekli iletişim sağlayarak programı
          anlık isteklerinize göre değiştirebiliyoruz. Süreç içerisinde aklınıza
          takılanları ve diyet listesine uyamayacağınız bir program değişikliği
          olması durumunda sınırsız iletişim kurmaktayız. Son dakika program
          değişikliği, alkollü akşam yemeği planları, bir yiyeceği canınızın
          çekmesi vb. durumlarda diyetinizi yeniden şekillendirmek adına destek
          alabilirsiniz. Bu sayede zorlanmadan ve “diyeti bozdum” düşüncesine
          kapılmadan program hedefinize uygun şekilde sürdürülebilir
          kılınmaktadır.
        </p>
        <h1 className="mt-[30px] text-xl font-medium">Süreç nasıl işliyor?</h1>
        <p className="mt-[30px] text-justify mb-10">
          Kişiye özel yüz yüze/online diyet programımızda ilk olarak size
          gönderilen anamnez formunu doldurmanız gerekmektedir. Form sonucunuzla
          birlikte, hastalıklarınız, hastalık riskiniz, yaşam biçiminiz, çalışma
          şekliniz, uyku düzeniniz, yöresel/bölgesel alışkanlıklarınız gibi tüm
          unsurlar göz önüne alınarak haftalık olarak yenilenen SADECE SİZE ÖZEL
          bir diyet programı hazırlanmaktadır. İhtiyaç duyulması halinde bir
          takım gerekli kan değerlerine bakılması için mümkün olan en kısa
          sürede kan tahlili de istenecektir. İlk görüşmede 20 dakika süren
          sağlıklı beslenme eğitimi ücretsiz verilmektedir. Haftada bir kere yüz
          yüze/online şekilde kontrol görüşmesi yapılmaktadır. Görüşme öncesi
          evinizde bulunan dijital baskül ve mezura ile alacağınız ölçüm
          sonuçları, görüşmede değerlendirilmektedir. Haftalık kontrolün yanı
          sıra 12.00-21.00 saatleri arasında Whatsapp üzerinden soru sorabilir,
          porsiyon kontrolü için öğünlerinizin fotoğraflarını yollayabilirsiniz.
        </p>
        {/* <img
          src={logo}
          alt="logo"
          className="max-w-[500px]max-h-[500px] absolute left-[40%] [@media_(max-width:768px)]:left-[10%] top-[30%] -z-10"
        /> */}
      </Container>
    </div>
  );
};

export default Detail;
