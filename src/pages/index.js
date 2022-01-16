import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Nav from '../components/Nav'

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div class="header">
          <Nav></Nav>
          
        </div>

    <div class="content-introduction">
    <div class="container-intro">
      <h1>
         Moi!<br /></h1>
         <h2>
         Olen Aino Valkama, teekkari Aalto-yliopistosta.<br /><br />
         Lyhyesti: tykkään koodaamisesta ja teknologiasta yleisesti, <br />
         sekä monitieteellisyydestä ja uusista, erityisesti humanistisista näkökulmista<br/> teknologian kehittämiseen.<br /><br />
         Vähän pidemmin: scrollaa alas, nettisivuni kertovat sinulle mielellään lisää!</h2>
       </div>
       </div>


    <div class="content-about">
      <h1>
        Minusta
      </h1>
       <div class="text-about">
      <div class="personal">
        <h2>Ihmisenä</h2>
      <p>
      Helsingissä varttunut, avoin ja sanavalmis toisen vuoden informaatioteknologian opiskelija. <br />
      Tärkeimpiä harrastuksiani ovat lukeminen, kirjoittaminen, elokuvat ja matkustelu. 

      <br /><br />
      </p>
      <h3>Työntekijänä</h3>
      <p>
      Vahvuuksiani työelämässä ovat sopeutumiskyky, yhteistyötaidot, kyky toimia itsenäisesti ja vastuullisesti sekä tarkkuus. 
      Ensimmäiset työsuhteeni solmin jo yläasteaikoina kesätyöläisenä, ja olen oppinut lukuisten työkokemusten kautta toimimaan ja sopeutumaan uusissa työympäristöissä eri rooleissa. 
      Työkokemuksen lisäksi vaihtovuoteni Yhdysvalloissa ja opiskelija-aktiivina toimiminen yliopistoaikana ovat vahvistaneet yhteistyötaitojani.
      Olen toiminut menestyksekkäästi useammassa vastuutehtävässä, sekä "oikeissa" että vapaaehtoistöissä, ja minuun on voinut luottaa jokaisessa.
      
      </p>
      </div>

      <div class="picture">
      <StaticImage
      src="../images/Aino1.jpg"
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="Aino!"
      placeholder="blurred"
    />
      </div>
      </div>
      </div>

      <div class="content-experience">
        <h1>
          Työkokemus
        </h1>
        <div class="work-experience">
          <div class="unihome">
          <h2>
            Unihome Oy | 2021
          </h2>
          <p>
            Työskentelin kesän 2021 Töölön Tornit-hotellissa monipuolisissa työtehtävissä.
            Vastuullani oli esimerkiksi asiakaspalvelu, vieraiden sisään- ja uloskirjautumisesta
            huolehtiminen,<br /> jatkuva yhteydenpito eri huolto- ja siivoustahojen kanssa, tilitys,
            ja Unihomen muiden kohteiden (Aalto Inn, Unihome Students, Domus Academica) ylläolevista palveluista vastaaminen etänä online-järjestelmien
            välityksellä. <br />Työ oli itsenäistä ja viikonloppuisin työskentelin yksin.
          </p>
          </div>
          <div class="gigantti">
            <h2>Gigantti | 2017-2020</h2>
            <p>
             Aloitin Gigantissa tietokonemyyjänä lukion ohella, ja jatkoin siellä työskentelyä (vuodesta 2019 alkaen kassatyöntekijänä) myös kahden välivuoden
             ajan. Työnkuvaani kuului asiakaspalvelu, päivittäiset kassarutiinit, tilitys, myymälän kunnossapito,
             inventaarion teko sekä osittaiset vastuutehtävät ja uusien työntekijöiden koulutus.
            </p>
          </div>
          </div>
          <div class="work-experience">
          <div class="mktg">
            <h2>MKTG Finland | 2016-2017</h2>
            <p>
              Tein lukion ohella MKTG:lla keikkatöitä tapahtuma- ja tuotepromoottorina. Työ oli usein täysin itsenäistä ja työnkuvaan kuului kalusteiden/rekvisiitan nouto ja palautus,
              työpisteen pystytys, aktiivinen asiakaskontaktointi ja myynnin sekä promootion sujumisen raportointi.
            </p>
          </div>
          <div class="hattumedia">
            <h2>Helsingin Kaupunki | 2016-2017</h2>
            <p>
              Työskentelin kesällä 2016 Helsingin kaupungin Nuorisoasiainkeskuksen mediakeskittymässä HattuMediassa. Työtehtäviini kuului mm. audio- ja video-<br />
              haastattelujen tekeminen, HattuMedian sosiaalisten tilien päivittäminen ja radiomainoksen tekeminen - eli sisällön ideoinnin ja tuotannon laaja-alaiset tehtävät. <br/>
              Jatkoin kesän jälkeen keikkaluontoisesti sisällöntuoton ja muiden tehtävien parissa.
            </p>
          </div>
          </div>
           <div class="work-experience">
            <div class="muut">
            <h2>Keikkatyöt</h2>
            <p>
            Olen tehnyt keikkatöitä lukuisissa eri yrityksissä vaihtelevia aikoja. Olen esimerkiksi työskennellyt
            baarimikkona <br/>ja vastannut itsenäisesti baarin avaamisesta ja toiminnasta. Olen myös keikkaillut useassa eri
            ravintola-alan firmassa esimerkiksi keittiön puolella, työskennellyt K- ja Lidl-ruokakaupoissa, pyörittänyt
            rantakiskaa, tehnyt töitä paperitehtaan varastolla ja avustanut sähköjärjestelmiä valmistavan yrityksen toimistossa.
            </p>
            </div>
            <div></div>
        </div> 
        </div>
      
      <div class="content-volunteering">
        <h1>Vapaaehtoistyökokemus</h1>
        <div class="volunteering-experience">
        <div class="picture">
        <StaticImage
          src="../images/Aino2.jpg"
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="Aino!"
          placeholder="blurred"
          />
      </div>
          <div class="guild">
            <h2>Automaatio- ja systeemitekniikan kilta (<a href="https://as.fi" target="_blank">as.fi</a>)</h2>
            <p>
              Innostuin jo opintojeni alkaessa Aallossa kiltatoiminnasta, kun ryhdyin vuonna 2020 kolmen eri toimikunnan jäseneksi.
              Ylläpidin vanhoja ja loin uusia yrityssuhteita killallemme Yrityssuhdetoimikunnassa, järjestin kiltalaisille ulkoilmatoimintaa
              Retkitoimikunnassa ja olin mukana suunnittelemassa ja toteuttamassa kiltamme vuosijuhlaa Stimulaatiota Stimulaatiotoimikunnassa.
            
              <br/><br/>
              Vuonna 2021 minut valittiin kiltamme hallituksen varapuheenjohtaksi kaudelle 2022. Päätehtäviini kuuluu puheenjohtajan työparina
              työskentely, sihteerin tehtävät, killan arkistosta huolehtiminen ja killan toimikuntien toiminnan koordinoiminen yhdessä puheenjohtajan
              kanssa. Jatkan myös tänä vuonna Yrityssuhdetoimikunnassa, ja lähdin mukaan myös Bränditoimikuntaan, joka vastaa
              killan brändin - esimerkiksi visuaalisen ilmeen ja Code Of Conductin - ylläpitämisestä ja suunnittelusta.
              <br/><br/>
              Lisäksi olen toiminut ISOna eli tutor-henkilönä 2021-2022. ISOt järjestävät fukseille toimintaa ja 
              auttavat heitä pääsemään kiinni yliopisto-opiskeluun ja kiltatoimintaan.
            </p>
          </div>
        </div>
      </div>
      <div class="content-skill">
        <h1>Taidot</h1>
        <div class="content-box">
          <div class="IT">
          <h2>IT</h2>
          <p>
            Python <br/>
            Scala <br/>
            HTML/CSS <br/>
            Javascript <br/>
            C <br/>
            Yleiset käyttöjärjestelmät <br />
            Office365 <br/>
          </p>
          </div>
          <div class="lang">
          <h2>Kielitaito</h2>
            <p>Suomi<br /></p>
            <div class="skillbar">
              <div class="skills suomi">Äidinkieli</div>
            </div>
            <p>Englanti <br /></p>
            <div class="skillbar">
              <div class="skills englanti">Erinomainen</div>
              </div>
            <p>Espanja<br /></p>
            <div class="skillbar">
              <div class="skills espanja">Keskusteleva</div>
              </div>
            <p>Ruotsi<br /></p>
            <div class="skillbar">
              <div class="skills ruotsi">Tyydyttävä</div>
              </div>
          </div>
        </div>
        </div>


        <div class="summary" id="contact">
          <h1>
          Ota yhteyttä
          </h1>
          <div class="summary-content">
            <div class="summary-text">
            <p>
              Tällä hetkellä etsin uusia työmahdollisuuksia kesää 2022 varten. <br/>Ota minuun yhteyttä
              oikealla näkyvän verkkolomakkeen kautta, <br/>tai valikoi mieluisa yhteydenottotapa yläpalkista.
              <br/><br/><br/>
              Voit toki myös soittaa tai laittaa sähköpostia - nappaa <a href="https://drive.google.com/file/d/1dY5B54WfBo8-VMukhaAOF8l8XLm_NlIS/view?usp=sharing" download target="_blank">tästä</a>
              <br/> CV:ni, josta saat yhteystietoni.
            </p>
            </div>
            <div class="form">
              
            <form action="https://getform.io/f/18d1f4e5-f7e2-4602-8b8d-ba0037e2b5ec" method="POST">
              <label>Nimi  <br/> <input type="text" name="name"/></label><br/>
              <label>Sähköposti   <br/><input type="email" name="email"/></label><br/>
              <label>Aihe <br/>  <input type="text" name="message"/></label><br/>
              <label>Viesti <br/><textarea name="message" id="message" rows="5" /></label><br/>
              
            <button type="submit">Lähetä</button>
          </form>


            </div>
          </div>
        </div>


  </Layout>
)

export default IndexPage
