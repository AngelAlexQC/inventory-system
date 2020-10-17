## Link de la API: https://inventario.itsup-ec.com/api
## Link de aplicación: https://inventory-fci.web.app

## Repositorio: https://github.com/AngelAlexQC/inventory-system

## Endpoints:

+-----------+-------------------------+------------------+
| Method    | URI                     | Name             | 
+-----------+-------------------------+------------------+
| GET|HEAD  | /                       |                  | 
| GET|HEAD  | api/category            | category.index   | 
| POST      | api/category            | category.store   | 
| GET|HEAD  | api/category/{category} | category.show    | 
| PUT|PATCH | api/category/{category} | category.update  | 
| DELETE    | api/category/{category} | category.destroy | 
| GET|HEAD  | api/product             | product.index    | 
| POST      | api/product             | product.store    | 
| GET|HEAD  | api/product/{product}   | product.show     | 
| PUT|PATCH | api/product/{product}   | product.update   | 
| DELETE    | api/product/{product}   | product.destroy  | 
| GET|HEAD  | api/sales               | sales.index      |
| POST      | api/sales               | sales.store      |
| GET|HEAD  | api/sales/{sale}        | sales.show       |
| PUT|PATCH | api/sales/{sale}        | sales.update     |
| DELETE    | api/sales/{sale}        | sales.destroy    |
+-----------+-------------------------+------------------+


### Integrantes:
- Bonilla Álvarez Juan José
- Muñoz Cedeño Jhonny Javier
- Quiroz Candela Ángel Alexander
- Zambrano Perero Regy
