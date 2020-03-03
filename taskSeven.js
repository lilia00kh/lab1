class SpaceStation {
    constructor(arr) {
        console.log("Всі станції");
        console.log(arr);
    }
    AddSpaceStation(item,arr)
    {
        console.log("Додаємо станцію");
        arr.splice(spaceStation.length,0,item);
        console.log(spaceStation );
    }
    EditingSpaceStation(n,m,item,arr)
    {
        console.log("Редагуємо станцію");
        arr.splice(n,m,item);
        console.log(spaceStation );
    }
    DeleteSpaceStation(n,m,arr)
    {
        console.log("Видаляємо станцію");
        arr.splice(n,m);
        console.log(spaceStation );
    }
    SearchSpaceStation(arr,item)
    {
        console.log("Шукаємо станцію");
        let t= arr.indexOf(item);
        if(t==-1)
        console.log("Немає елемента в масиві");
        else 
        console.log("Індекс елемента в масиві - "+ t);
    }

  }
  let spaceStation = ["PLM","IKN","KOL"];
  let newSpaceStation = "LJK";
  let n=1;
  let m=1;
  let g = new SpaceStation(spaceStation);
  g.AddSpaceStation(newSpaceStation,spaceStation);
  g.DeleteSpaceStation(n,m,spaceStation);

  
  class Planet
  {
    constructor(arr) {
        console.log("Всі планети");
        console.log(arr);
    }
    AddPlanet(item,arr)
    {
        console.log("Додаємо планету");
        arr.splice(spaceStation.length,0,item);
        console.log(spaceStation );
    }
    EditingPlanet(n,m,item,arr)
    {
        console.log("Редагуємо планету");
        arr.splice(n,m,item);
        console.log(spaceStation );
    }
    DeletePlanet(n,m)
    {
        console.log("Видаляємо планету");
        arr.splice(n,m);
        console.log(spaceStation );
    }
    SearchPlanet(arr,item)
    {
        console.log("Шукаємо планету");
        let t= arr.indexOf(item);
        if(t==-1)
        console.log("Немає елемента в масиві");
        else 
        console.log("Індекс елемента в масиві - "+ t);
    }
  }
  let planets=["Earth","Mars","Saturn"];
  let newPlanet="Uran";
  let l =0;
  let y =1;
  let p = new Planet(planets);
  p.EditingPlanet(l,y,newPlanet,planets);
class Cargo
{
    constructor(arr) {
        console.log("Всі доставки");
        console.log(arr);
    }
    AddCargo(item,arr)
    {
        arr.splice(spaceStation.length,0,item);
        console.log(spaceStation );
    }
    EditingCargo(n,m,item,arr)
    {
        arr.splice(n,m,item);
        console.log(spaceStation );
    }
    DeleteCargo(n,m)
    {
        arr.splice(n,m);
        console.log(spaceStation );
    }
    SearchCargo(arr,item)
    {
        let t= arr.indexOf(item);
        if(t==-1)
        console.log("Немає елемента в масиві");
        else 
        console.log("Індекс елемента в масиві - "+ t);
    }
}
let cargoes = [1,2,3,4];
let r = new Cargo(cargoes);
r.SearchCargo(cargoes,"2");
class DeliveryOfGoods
{
    constructor(arr) {
        console.log("Всі доставлені вантажі");
        console.log(arr);
    }
}

let deliveryOfGoods = [1,3,4,6];
