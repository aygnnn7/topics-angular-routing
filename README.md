# Angular - My Notes 2
## Angular Routing
Angular mimarisinde bir viewden digerine gidebilmek yahut bir component'ten digerine gecis yapabilmek icin Angular Router modulunden istifade edebiliriz.
Angular Router bir moduldur.
Bu modul ile yapilabilecek seyler:
    - Adres cubuna yazilan URL uzerinden belirli bir componente gitme.
    - Component'e query string degerlerini gonderme.
    - Browser'in ileri ve geri dugmelerini aktiflestirme/kullanabilme.
    - Dinamik olarak view yukeleme.
    - Rotalar uzerinde yetki kontrolu gerceklestirme.

## Angular Router Bilesenleri
**Router bileseni:** tarayici uzerinden geri/ileri dugmesini aktiflestiren ve component'ler arasinda gezinilmesini saglayan servistir.
**Route bileseni:** Angular'da component'lerin rotalarini belirlememizi saglayan yapilanmadir. Her bir route; bir path ve o path ile eslesen bir component'ten olusur.
**Routes bileseni:** Tum route'larin bulundugu bir dizidir.
**Router Outlet:** Tarayicinin adres cubugundaki URL ile uyumlu olan route'un view'in hangi alaninda gosterilecegini ifade eden yapidir.
**Router Link:** HTML ogesi olan o tag'ini bir route'a baglayan direktiftir.
**Router Link Active:** RouterLink ile birlik kullanilan baska bir direktiftir. RouterLink'in kullanildigi a tag'ine mevcut route durumunda dayali olarak aktif bir CSS class'i verir.
**RouterState:** Route uzerindeki tum bilgileri ve durumlari iceren bir nesnedir. Uygulamanin hangi rotada oldugunu ve rotanin nasil degistigini takip etmek icin kullanilir.

## Angular Router'in Yapilanmasi
1. `<base href>` ogesini ayarlama
2. Component icin rotalar tanimlama
3. Rotalari kaydederek uygulamaya gecirme
4. Yonlendirici rotayi/url ayarlama ve herhangi bir HTML nesnesi ile eslestirme
5. Yeni rotaya uygun component'in yuklenecegi alani belirleme