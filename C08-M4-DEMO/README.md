#Tao 4 components
- ng g c products
- ng g c productEdit
- ng g c productAdd
- ng g c productDelete

#Tao interface product
- ng g i product

#Tao service product
- ng g s product

#B0: Tich hop boostrap
- Tai bootstrap 3 va bo vao folder https://github.com/taitamfc/C08-M4-DEMO/tree/main/src/assets
- Dua bootstrap vao index.html https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/index.html

#B1: Khai bao interface product
- https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/product.ts

#B2: Khai bao cac phuong thuc trong service
- https://github.com/taitamfc/C08-M4-DEMO/commit/f598df453261eca5c251d2c01d5431740b70b06d

#B3: Lam viec voi router
 - Tao file app-routing.module
    https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/app-routing.module.ts
 - Import AppRoutingModule: 
    https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/app.module.ts
    ( dong 10 + 23 )
 - Chèn nội dung vào html
    https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/app.component.html
    
#B4: Lam viec voi ProductsComponent
 - Cập nhật nội dung cho products.component.ts
    + Import Service
    + Import Interface
    + Tiêm vào constructor
    + Khai báo thuộc tính products
    + Dùng _ProductService gọi getAll
    https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/products/products.component.ts
 - Hoàn thiện phần view và hiển thị data
    https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/products/products.component.html

#B5: Làm việc với ProductEditComponent
 - Import ReactiveFormsModule vào app.module.ts
 - Khai bao cac doan ma o component
   https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/product-edit/product-edit.component.ts
 - Khai bao o view
   https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/product-edit/product-edit.component.html
 - Khai bao ham update o service
   https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/product.service.ts

#B6: Làm việc với ProductAddComponent
 - Khai bao cac doan ma o component
   https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/product-add/product-add.component.ts
 - Khai bao o view
   https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/product-add/product-add.component.html
 - Khai bao ham store o service
   https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/product.service.ts

#B7: Lam viec voi ProductDeleteComponent
  - Khai bao cac doan ma o component
    https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/product-delete/product-delete.component.ts
  - Khai bao o view
    https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/product-delete/product-delete.component.html
  - Khai bao ham store o destroy
    https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/product.service.ts

#B8: Search feature
  - Khai bao cac doan ma o component
    https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/products/products.component.ts
  - Khai bao o view
    https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/products/products.component.html
  - Khai bao ham search o service
    https://github.com/taitamfc/C08-M4-DEMO/blob/main/src/app/product.service.ts