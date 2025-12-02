import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ProductService } from "./product.service";
import { Product } from "./product";

describe('ProductService', () => {

  let service: ProductService; //AUT: Application under Test
  let httpMock: HttpTestingController;

  const apiUrl = "http://localhost:8000/flowers";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });

    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();    // Ensures no outstanding requests
  });

  // ---------------------------------------------------------
  // TEST 1: getAllProducts()
  // ---------------------------------------------------------
  it('should fetch all products', () => {

    // Mock response data
    const mockProducts: Product[] = [
      { id: 1, title: "Rose", price: 100 },
      { id: 2, title: "Lotus", price: 150 }
    ];

    service.getAllProducts().subscribe(products => {
      expect(products.length).toBe(2);
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");

    req.flush(mockProducts);
  });

  // ---------------------------------------------------------
  // TEST 2: getProductById()
  // ---------------------------------------------------------
  it('should fetch product by ID', () => {

    const mockProduct: Product = { id: 5, title: "Jasmine", price: 200 };

    service.getProductById(5).subscribe(product => {
      expect(product).toEqual(mockProduct);
    });

    const req = httpMock.expectOne(`${apiUrl}/5`);
    expect(req.request.method).toBe("GET");

    req.flush(mockProduct);
  });

  // ---------------------------------------------------------
  // TEST 3: updateProduct()
  // ---------------------------------------------------------
  it('should send PUT request to update product', () => {

    const updatedProduct = { id: 3, title: "Lily", price: 180 };

    service.updateProduct(updatedProduct);

    const req = httpMock.expectOne(`${apiUrl}/3`);
    expect(req.request.method).toBe("PUT");

    // You can return a mock response or empty object
    req.flush({});
  });

});