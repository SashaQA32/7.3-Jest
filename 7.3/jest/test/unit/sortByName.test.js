const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it('Array the same Books', ()=> {
    expect(
      sorting.sortByName([
        'Гарри Поттер',
        'Властелин колец',
        'Властелин колец',
        'Волшебник изумрудного города',
      ])
    ).toEqual([
      'Властелин колец',
      'Властелин колец',
      'Волшебник изумрудного города',
      'Гарри Поттер',
    ]);
  });
});
