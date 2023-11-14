
# ShoppingList

## Installation
server side- C# .net core
Product class with the data member: ProductID, ProductName(I add Price), Category.
Category class with the data member: categoryID, categoryName.
the server is sql server, the name of data nase is ShoppingLIstDB.
the connect to db by GetconnectiongString in asp .net web api.
on the Controllers there are the functions get and post, to get the categories name list and create a new product. 

client side - react.js

### Component
- AddProductForm: Describes the form for adding a product.
- ProductList:Displays the list of products grouped by categories.
- TotalItems:: Displays a total of several chemical products in the shopping list.

### Redux-toolkit
- Products Slice: Describes the slice for managing product data.
- Categories Slice: Manages the categories for the products.
- TotalItems Slice: Manages all products

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm start`.

the result
![shop](https://github.com/etti6566/ShoppingList/assets/105908286/72c472b2-66c7-4d26-bbd2-243da7333c39)

![shop2](https://github.com/etti6566/ShoppingList/assets/105908286/91e50ec5-8d7b-450b-ab35-21898c972516)

