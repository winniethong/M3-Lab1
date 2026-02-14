//1
var movies = ["Despicable Me", "Despicable Me 2", "Despicable Me 3", "Despicable Me 4", "Minions: Rise of Gru"];
console.log(movies[1]);

//2
var movies = new Array(5);
movies[0] = "Despicable Me";
movies[1] = "Despicable Me 2";
movies[2] = "Despicable Me 3";
movies[3] = "Despicable Me 4";
movies[4] = "Minions: Rise of Gru";
console.log(movies[0]);

//3
var movies = new Array(5);
movies[0] = "Despicable Me";
movies[1] = "Despicable Me 2";
movies[2] = "Despicable Me 3";
movies[3] = "Despicable Me 4";
movies[4] = "Minions: Rise of Gru";
movies.splice(2, 0, "Inception");
console.log(movies.length);


//4
var movies = ["Despicable Me", "Despicable Me 2", "Despicable Me 3", "Despicable Me 4", "Minions: Rise of Gru"];
delete movies[0];
console.log(movies);

//5

var movies = ["Despicable Me", "Despicable Me 2", "Despicable Me 3", "Despicable Me 4", "Minions: Rise of Gru", "Inception", "Up"];
for (var i in movies) {
  console.log(movies[i]);
}

//6
var movies = ["Despicable Me", "Despicable Me 2", "Despicable Me 3", "Despicable Me 4", "Minions: Rise of Gru", "Inception", "Up"];
for (var movie of movies) {
  console.log(movie);
}


//7
var movies = ["Despicable Me", "Despicable Me 2", "Despicable Me 3", "Despicable Me 4", "Minions: Rise of Gru", "Inception", "Up"];
movies.sort();
for (var movie of movies) {
  console.log(movie);
}


//8
var movies = ["Despicable Me", "Despicable Me 2", "Despicable Me 3", "Despicable Me 4", "Minions: Rise of Gru", "Inception", "Up"];
var leastmovies = ["Troll 2", "Cats", "The Emoji Movie"];
console.log("Movies I like:\n");
for (var m of movies) console.log(m);
console.log("\nMovies I regret watching:\n");
for (var m of leastmovies) console.log(m);


//9
var movies = ["Despicable Me", "Despicable Me 2", "Despicable Me 3", "Despicable Me 4", "Minions: Rise of Gru", "Inception", "Up"];
var leastFavMovies = ["Troll 2", "Cats", "The Emoji Movie"];
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
for (var m of movies) console.log(m);

//10
var movies = ["Despicable Me", "Despicable Me 2", "Despicable Me 3", "Despicable Me 4", "Minions: Rise of Gru", "Inception", "Up"];
var leastFavMovies = ["Troll 2", "Cats", "The Emoji Movie"];
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
for (var m of movies) console.log(m);
console.log(movies[movies.length - 1]);

//11
var movies = ["Despicable Me", "Despicable Me 2", "Despicable Me 3", "Despicable Me 4", "Minions: Rise of Gru", "Inception", "Up"];
var leastFavMovies = ["Troll 2", "Cats", "The Emoji Movie"];
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
for (var m of movies) console.log(m);
console.log(movies[0]);

//12
var movies = ["Despicable Me", "Despicable Me 2", "Despicable Me 3", "Despicable Me 4", "Minions: Rise of Gru", "Inception", "Up"];
var leastFavMovies = ["Troll 2", "Cats", "The Emoji Movie"];
for (var i = 0;i < movies.length;i++) {
  for (var j = 0; j < leastmovies.length; j++) {
    if (movies[i] === leastmovies[j]) {
      console.log("bad indices: " + i);
      movies[i] = "good indices" + (i + 1);
    }
  }
}
console.log(movies);


//13
var movies = [["Despicable Me", 1], ["Despicable Me 2", 2], ["Despicable Me 3", 3], ["Despicable Me 4", 4], ["Minions: Rise of Gru", 5]];
for (var i = 0;i < movies.length;i++) {
  var namesOnly = movies[i].filter(function (item) {
    return typeof item === "string";
  });
  console.log(namesOnly[0]);
}


//14
var employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
var showEmployee = function (arr) {
  console.log("Employees:\n");
  for (var e of arr) console.log(e.toUpperCase());
};
showEmployee(employees);


//15
var filterValues = function (arr) {
    return arr.filter(function (item) {
      return item;
    });
  };
  console.log(filterValues([58, "", "abcd", true, null, false, 0]));
  

//16
var randomItem = function (arr) {
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
  };
  console.log(randomItem([1,2,3,4,5,6,7,8,9,10]));
  

//17
var getLargest = function (arr) {
    var largest = arr[0];
    for (var i = 1;i < arr.length;i++) {
      if (arr[i] > largest) largest=arr[i];
    }
    return largest;
  };
  
  console.log(getLargest([3,99,12,40,7]));
  


