using {Northwind as external} from './external/Northwind.csn';
service myservice{
    entity Products as projection on external.Products{
        key ProductID,
        ProductName
    };
}