tailwind.config = {

  theme: {
    extend:{
      gridtemplateColumns:{
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
          },
  fontFamily: {
    outfit:["Outfit", "system-ui"],
    ovo:["Ovo", "serif"]
  },
  animation:{
    spin_slow:"spin 6s linear infinite",
  },
  color:{
    lighthover:'#fcf4ff',
    darkhover:'#2a004a',
    darkTheme:'#11001f',
  },
  boxShadow:{
     'black':'4px 4px 0 #000000',
     'white':'4px 4px 0 #fff',
  }
    


}

}
,darkMode: 'selector'
}
