function play_piano(my_song) {
  let timer = 0

  function increment_timer(timer, my_song) {
     for(let i = 0; i < my_song.length; i++) {
        if(my_song[i].starts_at > timer)
          return my_song[i].starts_at
      }
      return timer + my_song[my_song.length-1].lasts
  }

  function print_play(timer, my_song) {
    for(let i = 0; i < my_song.length; i++) {
      if(my_song[i].starts_at === timer)
        console.log('Play ' + my_song[i].note)
    }
  }

  function print_wait(timer, my_song) {

    for(let i = 0; i < my_song.length; i++) {
      if( my_song[i].starts_at > timer) {
        console.log('Wait ' + (my_song[i].starts_at - my_song[i-1].starts_at) + ' seconds')
        return
      }
      if(i === my_song.length-1 && (my_song[i].starts_at + my_song[i].lasts) !== timer) {
        console.log('Wait ' + (my_song[i].starts_at - my_song[i-1].starts_at) + ' seconds')
        return
      }

    }
  }

  function print_release(timer, my_song) {
    for(let i = 0; i < my_song.length; i++) {
      if((my_song[i].lasts + my_song[i].starts_at) === timer)
        console.log('Release ' + my_song[i].note)
    }
  }
  while (timer !== (my_song[my_song.length-1].starts_at + my_song[my_song.length-1].lasts)) {
    print_play(timer, my_song)
    print_wait(timer,my_song)

    timer = increment_timer(timer, my_song)
    print_release(timer, my_song)

  }


}
//original example song
let my_song = [
  { note: 'A', starts_at: 0, lasts: 3 },
  { note: 'B', starts_at: 0, lasts: 3 },
  { note: 'C', starts_at: 1.5, lasts: 1.5 }
];

console.log('Example Song')
console.log('')
play_piano(my_song);

//song 1
let song1 = [
  { note: 'G', starts_at: 0, lasts: 1},
  { note: 'Bb', starts_at: 0, lasts: 1},
  { note: 'D', starts_at: 0, lasts: 1},
  { note: 'Eb', starts_at: 2, lasts: 1},
  { note: 'G', starts_at: 2, lasts: 1},
  { note: 'Bb', starts_at: 2, lasts: 1},
  { note: 'F', starts_at: 4, lasts: 1},
  { note: 'Ab', starts_at: 4, lasts: 1},
  { note: 'C', starts_at: 4, lasts: 1},
];
let song2 = [
  { note: 'C', starts_at: 0, lasts: 3},
  { note: 'D', starts_at: 0.5, lasts: .25},
  { note: 'Eb', starts_at: 1, lasts: 3},
  { note: 'Eb', starts_at: 2, lasts: 21},
  { note: 'Bb', starts_at: 2.5, lasts: .25},
  { note: 'C', starts_at: 3, lasts: 20},
];

console.log('')
console.log('Song 1')
console.log('')
play_piano(song1)
console.log('')
console.log('Song 2')
console.log('')
play_piano(song2)
