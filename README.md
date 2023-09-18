# JjeopJjeop Recipe
![image](https://user-images.githubusercontent.com/96387509/187108033-b7a94b25-0476-4ac4-a145-4c8223e9fe3f.png)
> This is a community commerce website where you can share your own recipes and purchase ingredients.<br>

You can upload your own recipes, share them with other members, and purchase the ingredients used in the recipes.<br>
For seller members, you can easily manage your products and check sales status.


## Built With
```
Backend: Java 11, Spring boot 2.7.2, Gradle, MyBatis, thymeleaf
DB : Oracle 11.2
Front : HTML5, CSS, JavaScript, JQuery, Bootstrap, Ajax
Tool : IntelliJ, VS Code, GitHub
```

## Contents
- [Requirements](#requirements)
- [ERD (Entity Relationship Diagram)](#erd-entity-relationship-diagram)
- [WBS (Work Breakdown Structure)](#wbs-work-breakdown-structure)
- [Introduction to Features](#introduction-to-features)
  - [Member](#member)
  - [My Page](#my-page)


## Requirements
Member
- Register: Grant member privileges
- Login: Find ID/Password
- Logout
- My Page: Edit personal info / View my postings in Recipe and Community boards / View my scrapped recipe list / View my shopping cart list

Administrator
- Edit, Delete recipe postings
- Query member information and Delete members
- Manage website categories
- Manage product categories in Shopping menu
- View the posting list reported as inproper by users in Recipe, Community and Shopping menu

Recipe
- Filter recipe types
- CRUD for recipe postings
- CRUD for comments in postings
- Scrap postings and count the number of scraps from other users
- Share Url

Shopping
- Register as a seller(Grant a privilege to write a product posting)
- CRUD for product postings
- CRUD for buying reviews
- Filter product categories
- Shopping cart
- Purchase payment

Index page + Integrated Search
- List popular recipes and products
- Integrated search for recipes and selling products

Community Board
- Sort posting types: recipe and recipe review
- CRUD for community boards
- Detailed Search: Search by date, category, title, content, writer, etc.
- CRUD for comments 

<br>
<br>

## ERD (Entity Relationship Diagram)
![파이널 프로젝트](https://user-images.githubusercontent.com/105467839/188069078-1b7e0755-9fef-4309-9451-e626806ac409.png)
<br>
<br>

## WBS (Work Breakdown Structure)
![image](https://user-images.githubusercontent.com/96387509/194100473-5a76aad5-233c-4465-8c0e-01ac86f52a4a.png)
<br>
<br>

## Introduction to Features

---
### Member
```
This is the registeration page.
- Membership registration is required to use the site, including recipe writing and shopping
- Register as a member only when entering valid information
- Find ID and password entered during registration through the ID/password recovery process
- Log in only when the values match what is stored in the database
```
- Registeration
![signup](https://user-images.githubusercontent.com/105467839/188056426-d89996c9-98be-4069-9598-38a1ae8957d1.gif)
- Find ID/Password
![findId](https://user-images.githubusercontent.com/105467839/188068581-953f39fb-0cdd-4761-a251-cb702c2cf4b0.gif)
- Login
![login](https://user-images.githubusercontent.com/105467839/188068163-30beb130-daea-4312-80ad-d44533e21377.gif)

---
### My Page
```
- Modify personal information, including password, in My Page after logging in
- View my scrap items, recipes, posts, shopping cart, and purchase history and move to the respective posts via links
- Delete an account by entering ID and password again (Note: An actual data is not deleted, and it is managed separately.)
```
- Edit My Page
![mypageEdit](https://user-images.githubusercontent.com/105467839/188057279-0b885436-df50-4fe4-9a87-68beb67ece7c.gif)
- My Scraps, My Recipes, My Postings, My Shopping Cart, My Payment
![myPages](https://user-images.githubusercontent.com/105467839/188058764-4e7c41c8-e393-4351-a691-5dcdd7b9d467.gif)
- Withdraw Membership
![myAccount](https://user-images.githubusercontent.com/105467839/188057583-10e2b73d-56a3-4342-aba8-6b9a45e43d62.gif)
<br>
<br>

---
### Index page and Integration Search

```
This is the page that appears when users first visit.
- Move to the integrated search for recipes and products by ingredient or recipe name
- View recipes and products sorted by scrap count and sales volume
- Access each page by clicking "More."
```

![image](https://user-images.githubusercontent.com/96387509/187108033-b7a94b25-0476-4ac4-a145-4c8223e9fe3f.png)

![image](https://user-images.githubusercontent.com/96387509/187108076-ddc30e07-4470-4e8e-a42f-4f8b62f43a47.png)

![totalsearch](https://user-images.githubusercontent.com/96387509/187107594-cc21a5a4-f2d1-46e9-9ca4-774d64b6236a.gif)

<br>
<br>

---
### Recipe

```
This is the recipe board where users can write recipes and view other people's recipes.
- Recipes can be sorted by category, posting date, scrap count, and views
- The same functions are available on the search page
- Scrap, copy the link to the clipboard, report, write and edit comments on the recipe detail page
- Add as many recipe categories and cooking steps as users like when writing a recipe
```

- Recipe Index   
![list인덱스](https://user-images.githubusercontent.com/101542378/188267504-b63a69ff-1208-4186-9d6d-4a945050d3d7.png)
<br>
<br>

- View and Sort by Category   
<img src="https://user-images.githubusercontent.com/101542378/188267560-4b54d3a5-80ce-4644-b89a-60e11be7252b.gif" width="70%" />
<br>
<br>

- Search
<img src="https://user-images.githubusercontent.com/101542378/188267631-e5c4c2dd-2000-484c-8883-312e3db0712c.gif" width="70%" />
<br>
<br>

- Write recipes
<img src="https://user-images.githubusercontent.com/101542378/188267637-7e34a73f-bf36-47c0-9d90-7003e913adff.gif" width="70%" />
<br>
<br>

- Detailed Contents
<img src="https://user-images.githubusercontent.com/101542378/188267645-bc750ab6-3ca2-4530-9fda-f58816ace965.gif" width="70%" />
<br>
<br>

- Write comments
<img src="https://user-images.githubusercontent.com/101542378/188267660-989c3016-9730-40a3-aeb2-492384d8fee2.gif" width="70%" />
<br>
<br>

---
### Shopping
```
This is the shopping page where users can post and purchase agricultural products.
- View products sorted by product type (vegetables, fruits, etc.), sales volume, and review ratings
- View detailed product information and member reviews, select quantities, add to the shopping cart, or make a payment on the product detail page
- Payments are processed through KakaoPay API
- View my shopping cart and payment history in My Page
```
<br>
<br>

---
### Community Board

```
This is the community board where users can leave free posts and recipe reviews.
- Differenciate writing format by categories (recipe/recipe review)
- Detailed search, like, and comment functions
```

- Community Board Index

  ![image](https://user-images.githubusercontent.com/96387509/187107964-d46ef565-df77-4bd7-96a7-0cff70a388fb.png)
  <br>
  <br>

- Write Postings
  ![communityform](https://user-images.githubusercontent.com/96387509/187107512-dddabc56-4b8b-49b9-afda-9154eae8e982.gif)
  <br>
  <br>
- Detailed Search
  ![communityformDetialSearch](https://user-images.githubusercontent.com/96387509/187107660-24b067df-7ccf-4bdc-a585-a469e451e97e.gif)
  <br>
  <br>
- Comments
  ![communityComment](https://user-images.githubusercontent.com/96387509/187107765-746cbcf5-39e5-4a91-b9e6-064e630ba517.gif)

<br>
<br>

---
### Administrator

```
This is the homepage administrator's exclusive page, accessible after a separate authentication process.
- View the entire list of members and process their withdrawals
- View the list of recipes reported by members and delete those recipes
- View the list of seller applications and approve or cancel approvals
- Manage registered sellers on the seller registration page
- View the list of posts reported by members and delete those posts
```

- Administrator Main
  ![메인](https://user-images.githubusercontent.com/104446775/187861254-35e6ce54-bdd1-4808-ba35-7165601de7d7.PNG)

- Member Management
  ![회원관리페이지](https://user-images.githubusercontent.com/104446775/187858549-9923b987-19ca-483c-9e4e-a23d115ce018.PNG)
  ![회원상세페이지](https://user-images.githubusercontent.com/104446775/187858943-ac621238-15e3-4908-aca1-f69749f8559f.PNG)
  ![아이디 검색결과](https://user-images.githubusercontent.com/104446775/187859202-3766608e-c0cb-4fcd-a2d0-4d46e2799f3a.PNG)

- Recipe Management
  ![레시피관리1](https://user-images.githubusercontent.com/104446775/187859457-59469cf1-50ef-45b4-9f6b-06496a1b4a1d.PNG)

- Seller Management
  ![판매자관리 승인목록](https://user-images.githubusercontent.com/104446775/187859907-4c4bc289-f7c0-4e40-a163-71e509c5b417.PNG)
  ![판매자관리 승인취소](https://user-images.githubusercontent.com/104446775/187860013-35a2c2ed-a07a-4b64-a3fb-63c003925a1e.PNG)

- Community Board Management
  ![게시판 목록](https://user-images.githubusercontent.com/104446775/187860596-84e1b102-8ebf-4eb7-a3db-866a56be9fb4.PNG)

- Register Sellers
  ![판매자 등록](https://user-images.githubusercontent.com/104446775/187862654-8468e730-5f0e-4320-a0c2-0f07a869da66.PNG)
