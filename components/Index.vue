<template>
  <main class="main">
    <div class="main__content">
      <div class="main__content__avatar">
        <img class="main__content__avatar__img" src="~/assets/img/avatar.svg" alt="いさお@エンジニア" title="いさお@エンジニア">
      </div>
      <h1 id="title" class="main__content__title">
        いさお@エンジニア
      </h1>
      <h2 id="profile">
        Profile
      </h2>
      <h3>
        Skills
      </h3>
      <ul class="main__content__skills">
        <li class="main__content__skills__item">
          Laravel 5.x
        </li>
        <li class="main__content__skills__item">
          Ruby on Rails 4.x, 5.x
        </li>
        <li class="main__content__skills__item">
          Vue.js 2.x
        </li>
        <li class="main__content__skills__item">
          Nuxt.js 1.x
        </li>
        <li class="main__content__skills__item">
          Ruby 2.x
        </li>
        <li class="main__content__skills__item">
          PHP 7.x
        </li>
        <li class="main__content__skills__item">
          Docker
        </li>
        <li class="main__content__skills__item">
          JavaScript
        </li>
        <li class="main__content__skills__item">
          ECMAScript 2015(ES6)
        </li>
        <li class="main__content__skills__item">
          jQuery
        </li>
        <li class="main__content__skills__item">
          AWS
        </li>
        <li class="main__content__skills__item">
          MySQL
        </li>
        <li class="main__content__skills__item">
          Git
        </li>
        <li class="main__content__skills__item">
          HTML 5
        </li>
        <li class="main__content__skills__item">
          CSS 3
        </li>
        <li class="main__content__skills__item">
          Amazon Linux
        </li>
        <li class="main__content__skills__item">
          CentOS 5.x, 6.x, 7.x
        </li>
        <li class="main__content__skills__item">
          Nginx
        </li>
      </ul>
      <h3>
        Works
      </h3>
      <p>大阪のエンジニアリングスクールにて、ネットワーク講師として企業研修や個人授業を実施。このときLinux, WindowsのサーバーOS、ミドルウェア、Cisco製ネットワーク機器を扱う。<br>
        <br>
        東京に移りSIerに就職。ネットワーク、インフラ、開発の現場にて、ウォーターフォールでの各フェーズを経験する。<br>
        <br>
        4人規模のシステム開発会社にジョインし、
      </p>
      <h3>
        マインド
      </h3>
      <h3>
        Licenses
      </h3>
      <ul class="main__content__licenses">
        <li class="main__content__licenses__item">
          Oracle Certified Java Programmer, Silver SE 7
        </li>
        <li class="main__content__licenses__item">
          Windows Server 2008 Active Directory Configuring
        </li>
        <li class="main__content__licenses__item">
          Linux Professional Institute Certification Level1
        </li>
        <li class="main__content__licenses__item">
          Cisco Certified Network Associate
        </li>
      </ul>
      <h2 id="accounts">
        Accounts
      </h2>
      <h3>
        Twitter
      </h3>
      <h3>
        GitHub
      </h3>
      <h3>
        Qiita
      </h3>
      <h3>
        Wantedly
      </h3>
      <h2 id="service">
        Service
      </h2>
      <h3>
        プロジェクトマネジメント
      </h3>
      <h3>
        システム開発
      </h3>
      <h3>
        プログラミングメンタリング
      </h3>
    </div>
  </main>
</template>

<style lang="scss">

.main {
  display: flex;
  justify-content: center;
  &__content {
    width: 50%;
    &__avatar {
      display: flex;
      justify-content: center;
      &__img {
      margin: 10px;
      border-radius: 50%;
      width: 200px;
      height: 200px;
      object-fit: scale-down;
      }
    }
    &__title {
      margin-top: 4px;
      margin-bottom: 4px;
      margin-left: 0px;
      margin-right: 0px;
    }
    &__skills {
      display: flex;
      flex-wrap: wrap;
      &__item {
        border-style: solid;
        border-width: 1px;
        border-radius: 10px;
        margin: 4px;
        padding: 6px;
      }
    }
    &__licenses {
      &__item:before {
        content: "-";
        color: #A1A9BA;
      }
    }
  }
}


</style>
