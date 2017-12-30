describe("Tabs", function() {

  beforeEach(function(){
    beyondTabs.init()
  })

  it("should load the notes", function() {
    expect(beyondTabs.notes[0]).toEqual("A");
    expect(beyondTabs.notes[1]).toEqual("A#/Bb");
  });


  // this may not work with chrome on local
  // use chrome flag --allow-file-access-from-files
  // it("should load the fixture", function() {
  //   loadFixtures('index.html')
  //   $('#content').myTestedPlugin()
  //   expect( $('.choose-key .key li') ).toHandle('click')
  // })

  // it("should load DOM", function() {
  //   console.log( beyondTabs.key )
  //   expect( beyondTabs.key )toBe( $('.keys li') )
  // })

})
