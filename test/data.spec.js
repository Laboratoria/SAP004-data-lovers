import { filterData, sortData} from '../src/data.js';
const pokemon = [{name: "Pikachu", num:"1", type:["Eletric"]}, 
{name: "Bulbasaur", num:'3', type:["Grass","Poison"]}, 
{name: "Caterpie", num:'2', type:["Bug"]}, 
{name: "Butterfree", num:'3', type:["Bug", "Flying"]}]

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns different type of Eletric', () => {
    expect(filterData(pokemon, "Eletric").length).toEqual(3);
  });

  it('returns different type of Bug', () => {
    let filter = filterData(pokemon,"Bug");
    expect(filter.length == 2 && filter[0].name == "Pikachu").toEqual(true);
  });
});



describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns ordened Menor-nº', () => {
    expect(sortData(pokemon, "num", "Menor-nº")[0].num).toEqual("1");
  });

  it('returns ordened Maior-nº', () => {
    expect(sortData(pokemon, "num", "Maior-nº")[0].num).toEqual("3");
  });

  it('returns ordened A-Z', () => {
    expect(sortData(pokemon,"name","A-Z")[0].name).toEqual("Bulbasaur");
  });

  it('returns ordened Z-A', () => {
    expect(sortData(pokemon,"name","Z-A")[0].name).toEqual("Pikachu");
  });

});
