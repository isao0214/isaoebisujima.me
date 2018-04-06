<template>
  <header class="header">
    <ul class="header__nav">
      <li class="header__nav__item">
        <a class="header__nav__item__link" href="#profile">
          Profile
        </a>
      </li>
      <li class="header__nav__item">
        <a class="header__nav__item__link" href="#accounts">
          Accounts
        </a>
      </li>
    </ul>
  </header>
</template>
<style lang="scss">

.header {
  background-color: #24292e;
  padding-top: 4px;
  padding-bottom: 2px;
  padding-right: 8px;
  padding-left: 8px;
  &__nav {
    display: flex;
    &__item {
      padding-right: 8px;
      padding-left: 8px;
      &__link {
        color: #c2c3c5;
      }
    }
  }
}

</style>
