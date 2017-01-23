---
title:  "Diziler ve Koleksiyonlar – 2"
subtitle: "Gelişme"
author: "Burak"
avatar: "img/authors/wferr.png"
image: "img/f.jpg"
date:   2016-08-16 20:20:12
---

İlk yazımda dizilerden bahsetmiştim. Bu yazımda da koleksiyon çeşitlerinden olan non-generic koleksiyonlardan, sınıflarından ve metodlarından bahsedeceğim. Diğer koleksiyon türlerini ise bir sonraki yazımda anlatmaya çalışacağım. Koleksiyonları tamamen bitirdikten sonra da genel olarak dizi ve koleksiyon farklılığından bahsederek yazı dizisini bitireceğim.Eğer diziler konusuna dönerek bilgilerinizi tekrar  etmek isterseniz buradan ulaşabilirsiniz.

### KOLEKSİYONLAR:

Koleksiyonlar, system.collections namespace 'inde yer alıyor. Genel olarak bahsedecek olursak; koleksiyonlar, yine dizilerde olduğu gibi veri gruplamaya yarıyor. Fakat dizilerde biliyorsunuz ki sadece aynı türden verileri gruplayabiliyorduk. Koleksiyonlarda ise hem aynı türden hemde farklı türden verileri gruplayabiliyoruz. Bir diğer farklılığı da eleman sayısını belirtmeden tanımlama yapabiliyoruz. Yine diziler, koleksiyonlar farklılığına değineceğimizden bu kadar farkını açıklamak yeter şimdilik. 

Koleksiyonları biz temelde 3 çeşide ayırıyoruz. Generic, non-generic ve specialized koleksiyonlar. 

Şimdi non-generic koleksiyonlara başlayalım.

### NON – GENERİC KOLEKSİYONLAR:

Bu koleksiyon türü, farklı tipteki verilerin bir arada  tutulabilmesine olanak sağlıyor. Yani integer ya da string değere sahip olup olmadığı önemli değil, istediğimiz türdeki veriyi non-generic koleksiyonlarla saklayabiliriz. Her türde veriyi tutmamız nasıl oluyor derseniz ? bu koleksiyonlar veriyi boxing işlemine tabii tutarak object türüne dönüştürerek tutuyor. Bu koleksiyonların kullandığı sınıflardan ve metodlardan bahsedecek olursak,

### ARRAYLIST:

Arraylist non-generic koleksiyonlara ait bir sınıftır. Nasıl tanımlandığına ve metodlarına bakalım. 

Yukarıdaki gibi tanımlama Numara adında bir koleksiyon tanımladık. Daha sonra Add metodu ile diziye ekleme yapıyoruz. Gördüğünüz gibi string,int, double ya da farklı bir türde olup olmaması önemli değil. Hepsi dönüştürülerek object tipinde Numara koleksyionuna kaydediliyor. Yine koleksiyonun bir elemanını çağırmak istersek numara[2] gibi bir ifadeyle numara koleksiyonunun 2.indexinde yer alan değeri geitiriyoruz. Fakat bu metodun bir yönü var ki bu bize bazen problem olabilir. Add metodu ile eleman eklerken istediğimiz index içerisine eleman atayamayız. Add metodu ile elemanı direkt olarak koleksiyonun sonuna  ekleriz. Biz eğer istediğimiz index içerisine değer atamak istersek bunu insert metodu ile yapmamız gerekiyor. 

Yukarıda gördüğünüz gibi Numara koleksiyonunda 5.indexe "Merhaba" değerini ekledik. Eğer add metodu kullansaydık 3.indexe bu eklemeyi yapabilecektik. İnsert metodunun diğer bir özelliği de eğer daha önce bir değer eklediğimiz indexe atama yapıyorsak diğer eleman silinmez, bir sonraki indexe ilerler. Aşağıda bunun bir örneğine ve çıktısına yer verilmiştir. 

Görüldüğü gibi "Burak" değişkeni silinmemiş bir sonraki indexe gitmiştir. 

Bir diğer metod ise sort metodu.Bu metod ise koleksiyon içerisinde yer alan elemanları sıralamamızı sağlıyor. Sıralama sayılar için küçükten büyüğe, string ifadeler için ise A'dan Z'ye yapılıyor. 

Yine  yukarıda sort metodunu gösterdiğimiz örnekte elemanları yazdırdığımız for döngüsünün eleman sayısı kadar işlemesi için count ifadesini kullandık.  Koleksiyonlarda işimize yarayan sıradaki metod remove ve removeat metodları. Bu metodlar isminden de anlayacağınız gibi elemanları silmeye yarıyor.

Remove metodu 77 değerine sahip olan elemanı silerken removeat ile 3 no'lu indexte bulunan elamanı silebiliriz. Eğer tüm koleksiyonu silmek istiyorsak Numara.Clear(); yazarak tüm içeriği silebiliriz.

Capacity ifadesi ise bizim koleksiyonumuzun kaç eleman alabileceğini gösterir. 4'ün katları olacak şekilde artış gösterir. Örneğin; sizin 5 elemanlı bir koleksiyonunuz varsa kapasite 8 olacaktır. Eğer diziye 5 eleman daha ekleyip 10 elemanlı bir koleksiyon elde edersek kapasitemiz 16 olacaktır.

### RANGE METODLAR:

Öncelikle söyleyeyim bildiğim kadarıyla böyle bir tabir yok 🙂 Şimdi bahsedeceğim metodların isimleri GetRange, AddRange, InsertRange ve RemoveRange olduğu için ben böyle bir ifade kullandım. Sırasıyla bu metodların kullanıldığı yerler;

### GETRANGE:

Dizinin belirli bir kısmını geriye döndürür. Bu tanım pek anlamanıza yardımcı olmamış olabilir bu nedenle örnek üzerinden gidelim. Getrange metodu Sayi.GetRange(2,5); şeklinde kullanılır. Burada yapılan iş Sayi dizisinin 2.indexinden itibaren 5 elemanı getirmektir.

### ADDRANGE:

Kısaca diziye, dizi eklememizi sağlar diyebiliriz. Sayi.AddRange(Numara); gibi kullanılabilir. Bu örnekte Numara dizisinin içerisinde yer alan değişkenleri Sayi dizisine ekledik.

### INSERTRANGE:

AddRange metodu ile aynı işleve sahip fakat InsertRange metodu farklı olarak sizin verdiğiniz index değerinden itibaren diğer dizinin elemanlarını ekliyor. Örnek olarak; Sayi.InsertRange(3,Numara); ifadesinde Sayi koleksiyonunun 3 nolu indexinden itibaren Numara koleksiyonuna ait değerler eklenecektir. 

### REMOVERANGE:

Belirtilen index değerinden itibaren belirtilen silme işlemi yapmamızı sağlar. Numara.RemoveRange(1,3); ifadesindeki gibi kullanılır. Burada Numara adlı koleksiyonun 1 no'lu indexinden itibaren 3 adet elemanı silmemizi sağlar.

 

COPYTO METODU:

CopyTo metodu aslında sadece koleksiyonlarda değil dizilerde de kullanılıyor. Yani system.array sınıfında da böyle bir metod mevcut. Bu metod dizi içerisindeki elemanları farklı bir diziye kopyalamamızı sağlıyor. 

Ekran Alıntısı

Yukarıda görüldüğü üzere önce Numara ve Sayi adında bir arraylist oluşturduk ardından da Sayi2 adında bir array. CopyTo metodu kullanılırken yukarıdaki gibi önce içeriğini kopyalayacağımız diziyi ardından copyto metodu ve içerisine de elemanları kopyalayacağımız yer olan array dizisini yazarız. Burada önemli olan nokta hedef dizinin tipinin array olmasıdır. Örneğin arraylist olarak tanımladığımız Sayi dizisine böyle bir atama yaparsak aşağıdaki hatayla karşılaşacağızdır. 

Screenshot_1

 

CLONE METODU:

Clone metodu, CopyTo metodunda olduğu  gibi bir diziyi başka bir diziye kopyalamamızı sağlar. Fakat bunu daha farklı bir yol ile yapıyor. Verileri object türünde kopyalıyor.  Yani biz bir diziyi kopyalarken içerisinde eğer farklı türden değerler barındırıyorsa bu işlemi CopyTo metodu ile yapamayız. Bu işlemi Clone metodu ile yapmamız gerekiyor. Peki Clone metodu ile aslında CopyTo ile yaptığımız işleri yapabiliyorsak neden Clone metodunu kullanmıyoruz da CopyTo ile de kafamızı karıştırıyoruz? İşte bunlar hep performans…

Aşağıda yer verdiğim örnekte öncelikle 1 ile 100 arasında rastgele bir sayıyı numara koleksiyonuna ekliyoruz. Tam 100.000 elemanımız olana kadar. Şimdi Numara koleksiyonumuzda yer alan 100.000 elemanı önce Clone metoduyla, ardından CopyTo metoduyla dizilere aktarıyoruz. Bu işlemleri yaparken de süre tutuyoruz. En sonunda bakıyoruz ki Clone metodu bu işlemi 20,0252 ms sürede tamamlarken CopyTo metodu aynı işlem için Clone metoduna göre 4 'te birinden bile daha kısa bir süre harcıyor: 4,9747 ms. Söylediğim gibi aslında burada bu süreler bu gibi bir işlemde önemli gözükmüyor çünkü 4 kat gibi bir fark olsa da Clone metodu da çok hızlı. Fakat bunu tek bir işlem olarak düşünüyoruz. Sonuç olarak günlük hayatta çok daha kompleks uygulamar kullanıyoruz. Örneğin; web sitenizin 4 kat daha yavaş açılması müşteri trafiğini nasıl etkilerdi bir düşünün. 

Screenshot_1 Screenshot_2

ToArray Metodu:

Bu metodun amacı ise istenilen veri türünde kopyalama işlemini yapmasıdır. Bu kopyalama işlemi için object tipindeki veri istenilen veri türüne çevrilerek saklanır. 

Screenshot_3

Yukarıda görüldüğü gibi kulalnılır. Önce veri türü ardından kopyalama işlemini yapacağımız arraylist ile toarray metodunu ve yine veri türünü yazarak kopyalama işlemini yapıyoruz. Böylece int tipinde Sayi dizisine arraylist içerisindeki veriyi atamış oluyoruz.

ArrayList sınıfının bahsedeceğim metodları bu kadar. Kalan sınıflar:Hashtable ve sortedlist. Fakat bu sınıflara bu kadar uzun zaman ayırmayacağız. Devam edeliim…

HASHTABLE SINIFI: 

Hashtable sınıfı yine farklı tür elemanları gruplandırmaya yarayan, system.Collections içerisinde yer  alan bir sınıf. Temel farkı ise hashtable 'da veriler index numarasına göre değil de anahtarlarına göre tutuluyor olmasıdır.

Screenshot_1

Yukarıdaki örneği açıklayarak gidelim. İlk önce hashtable sınıfından bir Sayi koleksiyonu üretiyoruz. Daha sonra add metodu ile bu koleksiyona eklemeler yapıyoruz. Ardından ICollection aracılığıyla Sayilar adında bir koleksiyon oluşturuyoruz ve bu koleksiyona Sayi koleksiyonumuzda yer alan elemanların anahtar değerlerini atıyoruz ardından bir foreach döngüsü yardımıyla bu anahtar degerleri ekrana yazdırıyoruz. Peki hem anahtarı hem de elemanın değerini yazdırmak istersek bunu nasıl yapabiliriz?

Bu durumda DictionaryEntry yapısından yararlanacağız. 

Screenshot_2  Screenshot_1

Gördüğünüz gibi DictionaryEntry yapısı ile hem anahtarı hem de değeri yazdırabildik. Ayrıca bu durumda ICollection arayüzünü kullanarak bir koleksiyon tanımlamamız gerekmedi. HashTable içerisinde bahsedeeceğimiz son metod ise ContainsKey ve   ContainsValue  metodları. Bu metodlar, geççen yazımda dizilerde yer verdiğim contains metodunun aynısı.İsimlerini de dikkate alırsak yapılacak çıkarım ContainsKey metodunun, koleksiyon içerisinde anahtarın olup olmadığını; ContainsValue ise aradığımız değerin koleksiyon içerisinde bulunup bulunmadığını getirir. 

 

Screenshot_1 Screenshot_2

 

Yukarıda ki örneklerde bu metodlar aracılığıyla Sayi koleksiyonunda girilen key ya da değer var mı kontrol ediliyor. 

SORTEDLIST SINIFI:

Bu sınıfta da elemanlara erişim hem index numarası hem de anahtar değerlere göre yapılabilir. Ayrıca isminden de anlaşıldığı üzere bu sınıfta elemanlar sıralanarak tutulur. Kullanımını yine bir örnek üzerinde inceleyelim.

Screenshot_1

Öncelikle sortedlist sınıfı kullanılarak bir koleksiyon oluşturuyoruz. Ardından elemanları ekliyoruz. Ve IndexOfKey metodunu kullanarak anahtar değeri 6 olan elemanın  index değerini yazdırdık. Burada ekrana 2 yazısı çıkacaktır. Çünkü söylediğim gibi sortedlist sınıfında  değerler sıralanarak tutuluyor bu nedenle küçükten büyüğe sıraladığımızda 0 no'lu indexte keyi 3 olan, 1 no'lu indexte keyi 5 olan ve 2 no'lu indexte keyi 6 olan eleman tutulacaktır. IndexOfValue metodu da benzer bir işe yaramaktadır. Bu metod kullanılarak değerini yazdığımız elemanın indexini elde ederiz. Eğer koleksiyonda bu değere sahip bir eleman yoksa değer "-1" dönecektir. 

Örneğin;  Console.WriteLine(Sayi.IndexOfKey(6)); yerine  Console.WriteLine(Sayi.IndexOfValue(56)); yazarsak sonuç yine 2 olacaktır. 

Screenshot_1 Screenshot_2

Örneğimize yukarıda yer alan satırları ekleyelim.

GetByIndex ve GeyKey metodlarında biz index değerini girdiğimiz elemana ait bilgileri alıyoruz. GetKey metodunda 2 indexinde bulunan elemanın key'i olan 6 değeri çıktı olarak verilirken GetByIndex metodu 2 indexinde bulunan elemanın 56 olan değerini verir.

Bu arada tüm bunları anlatmışken belki kafa karışıklığına neden olabilir diye bir uyarıda bulunmak istiyorum. SortedList yine farklı türden veriler saklayabileceğiniz bir koleksiyon olması, hem elemanınızın değerini hem de anahtarını herhangi bir türden girebileceğinizi gösterir. Fakat sortedlist key değerine göre sıralandığı için biz keyi hangi tür giriyorsak diğer keyler de aynı tür olmak zorundadır. Aşağıda bu duruma ait bir örnek bulunuyor.

Biz Sayi koleksiyonumuza 3 adet eleman ekledik.Aslında bir problem yok gibi gözükse de SortedList sınıfının bu elemanları key değerlerine göre sıralaması gerekecek. Fakat "B104" string bir değer iken 5 int tipinde bir değer.Dopal olarak hangi eleman daha büyük bir karar veremeyeceğinden kodumuz hata üretecektir. Bu nedenle key değerini hangi tip değerinde giriyorsak girelim, diğer key değerleri de aynı tipte olmalıdır.  

Screenshot_2 Screenshot_1 

Son metodumuz TryGetValue. Bu metod keyini girdiğimiz elamanın değerini out ifadesi ile belirttiğimiz değişkene aktarmaktadır.Tabi bu metodu kullanabilmemiz için sortedlist sınıfını biraz farklı kullanmamız gerekiyor. Sortedlist ile koleksiyon oluştururken aşağıdaki örnekte olduğu gibi anahtar ve değerin değişken tiplerini girmemiz gerekiyor. Bu şekilde kullandığımızda TryGetValue metodunu kullanabiliriz. TryGetValue metodunun kullanımı da yine aşağıda gördüğünüz gibi. Metodu kullandığımız satırda 45 keyine sahip olan elemanın değeri 56 olduğu için bu değeri alıp Yeni adlı değişkene atıyor. 

 Screenshot_1

 

Saınırım şimdilik bu kadar yeter. Ne kadar basit konular olsa da yeni başlayanlar için buradan sonrası bilgi karışıklılığına yol açabilir. Bir sonraki yazımda generic ve specialized koleksiyonlar nelerdir. Bunlardan bahsedeceğiz. Görüşmek üzere…
