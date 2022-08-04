<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
  <head th:replace="/fragments/head('쩝쩝박사')">
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- bootstrap  -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />

    <link
      href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <!-- icons -->
    <link
      href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="/static/css/style.css"
      th:href="@{/css/style.css}"
    />
  </head>
  <body>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark py-3"
      aria-label="Eighth navbar example"
      th:replace="fragments/nav :: front-nav('home')"

    >
      <div class="container">
        <a class="navbar-brand" href="#">NAME</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample07">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Recipe</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Shopping</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Community</a>
            </li>
          </ul>
          <div class="user_option d-flex">
            <a href="" class="user_link">
              <i class="fa fa-user" aria-hidden="true"></i>
            </a>
            <a class="cart_link" href="#">
              <i class="fa fa-shopping-cart"></i>
            </a>

            <a class="search_link" href="#">
              <i class="fa fa-search" aria-hidden="true"></i>
            </a>

            <a href="" class="login"> Login </a>
          </div>
        </div>
      </div>
    </nav>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
