using my.bookshop as my from '../db/data-model';

service CatalogService {
    @readonly entity Books as projection on my.Books;
    @readonly entity Books2 as projection on my.Books;
}
