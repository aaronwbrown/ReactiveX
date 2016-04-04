// reactivex.io problems

/*

Projecting Arrays
Applying a function to a value and creating a new value is called a projection.
To project one array into another, we apply a projection function to each item
in the array and collect the results in a new array.

Exercise 3: Project an array of videos into an array of {id,title} pairs using forEach()

For each video, add a projected {id, title} pair to the videoAndTitlePairs array.

*/

function() {
  var newReleases = [
  {
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  },
  {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id:432534, time:65876586 }]
  },
  {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  },
  {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id:432534, time:65876586 }]
  }
  ],
  videoAndTitlePairs = [];

  newReleases.forEach(function(item) {
    videoAndTitlePairs.push({id: item.id, title: item.title});
  });

  return videoAndTitlePairs;
}

/*
All array projections share two operations in common:

•Traverse the source array
•Add each item's projected value to a new array


Why not abstract away how these operations are carried out?

Exercise 4: Implement map()

To make projections easier, let's add a map() function to the Array type.
Map accepts the projection function to be applied to each item in the source array,
and returns the projected array.
*/

Array.prototype.map = function(projectionFunction) {
  var results = [];
  this.forEach(function(itemInArray) {
    results.push(projectionFunction(itemInArray));

    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the projectionFunction to each item in the array and add
    // each result to the results array.
    // Note: you can add items to an array with the push() method.
    // ------------ INSERT CODE HERE! ----------------------------

  });

  return results;
};

/*

Exercise 5: Use map() to project an array of videos into an array of {id,title} pairs

Let's repeat the exercise of collecting {id, title} pairs for each video in the
newReleases array, but this time we'll use our map function.

*/

function() {
  var newReleases = [
  {
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  },
  {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id:432534, time:65876586 }]
  },
  {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  },
  {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id:432534, time:65876586 }]
  }
  ];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Use map function to accumulate {id, title} pairs from each video.
  return newReleases.map(function(item) {
    return ({id: item.id, title: item.title});
  }); // finish this expression!
  // ------------ INSERT CODE HERE! -----------------------------------

}

/*

Notice that map allows us to specify what projection we want to apply to an
array, but hides how the operation is carried out.

Filtering Arrays
Like projection, filtering an array is also a very common operation.
To filter an array we apply a test to each item in the array and collect the items that pass into a new array.

Exercise 6: Use forEach() to collect only those videos with a rating of 5.0

Use forEach() to loop through the videos in the newReleases array and,
if a video has a rating of 5.0, add it to the videos array.

  */

function() {
  var newReleases = [
  {
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
    "bookmark": []
  },
  {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
    "bookmark": [{ id:432534, time:65876586 }]
  },
  {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
    "bookmark": []
  },
  {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
    "bookmark": [{ id:432534, time:65876586 }]
  }
  ],
  videos = [];

  newReleases.forEach(function(item) {
    if (item.rating === 5) {
      videos.push(item);
    }
  });

  // ------------ INSERT CODE HERE! -----------------------------------
  // Use forEach function to accumulate every video with a rating of 5.0
  // ------------ INSERT CODE HERE! -----------------------------------

  return videos;
}

/*

Notice that, like map(), every filter() operation shares some operations in common:

•Traverse the array
•Add objects that pass the test to a new array

Why not abstract away how these operations are carried out?

Exercise 7: Implement filter()

To make filtering easier, let's add a filter() function to the Array type.
The filter() function accepts a predicate. A predicate is a function that accepts
an item in the array, and returns a boolean indicating whether the item should be retained in the new array.

*/

Array.prototype.filter = function(predicateFunction) {
  var results = [];
  this.forEach(function(itemInArray) {

    if(predicateFunction(itemInArray)) {
      results.push(itemInArray);
    } else {
      return;
    }
    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the predicateFunction to each item in the array.
    // If the result is truthy, add the item to the results array.
    // Note: remember you can add items to the array using the array's
    // push() method.
    // ------------ INSERT CODE HERE! ----------------------------
  });

  return results;
};

/*

Query Data by Chaining Method Calls
Exercise 8: Chain filter and map to collect the ids of videos that have a rating of 5.0

*/

function() {
  var newReleases = [
  {
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
    "bookmark": []
  },
  {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
    "bookmark": [{ id:432534, time:65876586 }]
  },
  {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
    "bookmark": []
  },
  {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
    "bookmark": [{ id:432534, time:65876586 }]
  }
  ];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Chain the filter and map functions to select the id of all videos
  // with a rating of 5.0.

  return newReleases.
  filter(function(item) {
    return item.rating === 5.0;
  }).
  map(function(item) {
    return item.id;
  });

}

/*

Chaining together map() and filter() gives us a lot of expressive power.
These high level functions let us express what data we want, but leave the
underlying libraries a great deal of flexibility in terms of how our queries are executed.

------

Querying Trees
Sometimes, in addition to flat arrays, we need to query trees. Trees pose a
challenge because we need to flatten them into arrays in order to apply
filter() and map() operations on them. In this section we'll define a
concatAll() function that we can combine with map() and filter() to query trees.

Exercise 9: Flatten the movieLists array into an array of video ids

Let's start by using two nested forEach loops to collect the id of every video in the two-dimensional movieLists array.

*/

function() {
  var movieLists = [
  {
    name: "New Releases",
    videos: [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    }
    ]
  },
  {
    name: "Dramas",
    videos: [
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    }
    ]
  }
  ],
  allVideoIdsInMovieLists = [];

  movieLists.forEach(function(category) {
    category.videos.forEach(function(video) {
      allVideoIdsInMovieLists.push(video.id);
    });
  });

  // ------------   INSERT CODE HERE!  -----------------------------------
  // Use two nested forEach loops to flatten the movieLists into a list of
  // video ids.
  // ------------   INSERT CODE HERE!  -----------------------------------

  return allVideoIdsInMovieLists;

}

/*

Flattening trees with nested forEach expressions is easy because we can explicitly
add items to the array. Unfortunately it's exactly this type of low-level
operation that we've been trying to abstract away with functions like map() and filter().
Can we define a function that's abstract enough to express our intent to
flatten a tree, without specifying too much information about how to carry out the operation?

Exercise 10: Implement concatAll()

Let's add a concatAll() function to the Array type. The concatAll() function
iterates over each sub-array in the array and collects the results in a new, flat array.
Notice that the concatAll() function expects each item in the array to be another array.

*/

Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {

    if (subArray instanceof Array) {
      subArray.forEach(function(item) {
        results.push(item);
      });
    }

    // ------------ INSERT CODE HERE! ----------------------------
    // Add all the items in each subArray to the results array.
    // ------------ INSERT CODE HERE! ----------------------------
  });

  return results;

};

/*

concatAll is a very simple function, so much so that it may not be obvious yet how it can be combined with map() to query a tree. Let's try an example...

Exercise 11: Use map() and concatAll() to project and flatten the movieLists into an array of video ids

Hint: use two nested calls to map() and one call to concatAll().

*/

function() {
  var movieLists = [
  {
    name: "New Releases",
    videos: [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    }
    ]
  },
  {
    name: "Dramas",
    videos: [
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    }
    ]
  }
  ];



  // ------------   INSERT CODE HERE!  -----------------------------------
  // Use map and concatAll to flatten the movieLists in a list of video ids.
  // ------------   INSERT CODE HERE!  -----------------------------------

  return movieLists.map(function(movieTree) {
    return movieTree.videos.map(function(movieId) {
      return movieId.id;
    });
  }).concatAll();
}

/*

Exercise 12: Retrieve id, title, and a 150x200 box art url for every video

You've managed to flatten a tree that's two levels deep, let's try for three! Let's say that instead of a single boxart url on each video, we had a collection of boxart objects, each with a different size and url. Create a query that selects {id, title, boxart} for every video in the movieLists. This time though, the boxart property in the result will be the url of the boxart object with dimensions of 150x200px. Let's see if you can solve this problem with map(), concatAll(), and filter().

There's just more one thing: you can't use indexers. In other words, this is illegal:

var itemInArray = movieLists[0];

Furthermore, you're not allowed to use indexers in any of the remaining exercises unless you're implementing one of the five functions. There is a very good reason for this restriction, and that reason will eventually be explained. For now, you'll simply have to accept it on faith that this restriction serves a purpose. :-)

*/

function() {
  var movieLists = [
  {
    name: "Instant Queue",
    videos : [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxarts": [
      { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
      ],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxarts": [
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
      { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

      ],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    }
    ]
  },
  {
    name: "New Releases",
    videos: [
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxarts": [
      { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
      ],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxarts": [
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
      { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
      { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
      ],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    }
    ]
  }
  ];


  // Use one or more map, concatAll, and filter calls to create an array with the following items
  // [
  //   {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
  //   {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
  //   {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
  //   {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
  // ];

  return movieLists.map(function(list) {
    return list.videos.map(function(movies) {
      return movies.boxarts.filter(function(boxart) {
        return boxart.width === 150;
      }).map(function(boxart) {
        return ({id: movies.id, title: movies.title, boxart: boxart.url});
      });
    }).concatAll();
  }).concatAll();

}

/*

Exercise 13: Implement concatMap()

Nearly every time we flatten a tree we chain map() and concatAll(). Sometimes, if we're dealing with a tree several levels deep, we'll repeat this combination many times in our code. To save on typing, let's create a concatMap function that's just a map operation, followed by a concatAll.

*/

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
  return this.
  map(function(item) {
    return projectionFunctionThatReturnsArray(item);
      // ------------   INSERT CODE HERE!  ----------------------------
      // Apply the projection function to each item. The projection
      // function will return an new child array. This will create a
      // two-dimensional array.
      // ------------   INSERT CODE HERE!  ----------------------------
    }).
    // apply the concatAll function to flatten the two-dimensional array
    concatAll();
  };

/*
  var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
  // collect all the words for each number, in every language, in a single, flat list
  var allWords = [0,1,2].
    concatMap(function(index) {
      return spanishFrenchEnglishWords[index];
    });

  return JSON.stringify(allWords) === '["cero","rien","zero","uno","un","one","dos","deux","two"]';
  */

/*

Now, instead of using map().concatAll() to flatten a tree, we can just use concatMap helper function.

Exercise 14: Use concatMap() to retrieve id, title, and 150x200 box art url for every video

Let's repeat the exercise we just performed. However this time we'll simplify the code by replacing the map().concatAll() calls with concatMap().

*/

function() {
  var movieLists = [
  {
    name: "Instant Queue",
    videos : [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxarts": [
      { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
      ],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxarts": [
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
      { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

      ],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    }
    ]
  },
  {
    name: "New Releases",
    videos: [
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxarts": [
      { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
      ],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxarts": [
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
      { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
      { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
      ],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    }
    ]
  }
  ];


  // Use one or more concatMap, map, and filter calls to create an array with the following items
  // [
  //   {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
  //   {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
  //   {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
  //   {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
  // ];

  return movieLists.concatMap(function(list) {
    return list.videos.concatMap(function(movies) {
      return movies.boxarts.filter(function(boxart) {
        return boxart.width === 150;
      }).map(function(boxart) {
        return ({id: movies.id, title: movies.title, boxart: boxart.url});
      });
    });
  }); // Complete this expression!

}

/*

Reducing Arrays
Sometimes we need to perform an operation on more than one item in the array at the same time. For example, let's say we need to find the largest integer in an array. We can't use a filter() operation, because it only examines one item at a time. To find the largest integer we need to compare items in the array to each other.

One approach could be to select an item in the array as the assumed largest number (perhaps the first item), and then compare that value to every other item in the array. Each time we come across a number that was larger than our assumed largest number, we'd replace it with the larger value, and continue the process until the entire array was traversed.

If we replaced the specific size comparison with a closure, we could write a function that handled the array traversal process for us. At each step our function would apply the closure to the last value and the current value and use the result as the last value the next time. Finally we'd be left with only one value. This process is known as reducing because we reduce many values to a single value.

Exercise 15: Use forEach to find the largest box art

In this example we use forEach to find the largest box art. Each time we examine a new boxart we update a variable with the currently known maximumSize. If the boxart is smaller than the maximum size, we discard it. If it's larger, we keep track of it. Finally we're left with a single boxart which must necessarily be the largest.

*/

function() {
  var boxarts = [
  { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
  { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
  { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
  { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
  ],
  currentSize,
  maxSize = -1,
  largestBoxart;

  boxarts.forEach(function(boxart) {
    currentSize = boxart.width * boxart.height;
    if (currentSize > maxSize) {
      largestBoxart = boxart;
      maxSize = currentSize;
    }
  });

  return largestBoxart;
}

/*

This process is a reduction because we're using the information we derived from the last computation to calculate the current value. However in the example above, we still have to specify the method of traversal. Wouldn't it be nice if we could just specify what operation we wanted to perform on the last and current value? Let's create a helper function to perform reductions on arrays.

Exercise 16: Implement reduce()

Let's add a reduce() function to the Array type. Like map. Take note this is different from the reduce in ES5, which returns an value instead of an Array!

*/

// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }); === [6];
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10); === [16];

Array.prototype.reduce = function(combiner, initialValue) {
  var counter,
  accumulatedValue;

  // If the array is empty, do nothing
  if (this.length === 0) {
    return this;
  }
  else {
    // If the user didn't pass an initial value, use the first item.
    if (arguments.length === 1) {
      counter = 1;
      accumulatedValue = this[0];
    }
    else if (arguments.length >= 2) {
      counter = 0;
      accumulatedValue = initialValue;
    }
    else {
      throw "Invalid arguments.";
    }

    // Loop through the array, feeding the current value and the result of
    // the previous computation back into the combiner function until
    // we've exhausted the entire array and are left with only one value.
    while(counter < this.length) {
      accumulatedValue = combiner(accumulatedValue, this[counter])
      counter++;
    }

    return [accumulatedValue];
  }
};

/*

Exercise 17: Retrieve the largest rating.

Let's use our new reduce function to isolate the largest value in an array of ratings.

*/

function() {
  var ratings = [2,3,1,4,5];

  // You should return an array containing only the largest rating. Remember that reduce always
  // returns an array with one item.
  return ratings.
  reduce(function(accumulator, currentElem) {
    if (accumulator > currentElem) {
      return accumulator;
    } else {
      return currentElem;
    }
  });
}

/*

Nice work. Now let's try combining reduce() with our other functions to build more complex queries.

Exercise 18: Retrieve url of the largest boxart

Let's try combining reduce() with map() to reduce multiple boxart objects to a single value: the url of the largest box art.

*/

function() {
  var boxarts = [
  { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
  { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
  { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
  { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
  ];

  // You should return an array containing only the URL of the largest box art. Remember that reduce always
  // returns an array with one item.
  return boxarts.
  reduce(function(accumulator, currentElem) {
    if (accumulator.width * accumulator.height > currentElem.width * currentElem.height) {
      return accumulator;
    } else {
      return currentElem;
    }
    }).map(function(boxart){ // once reduce completes, .map() is run to get the boxart url from the reduced object
      return boxart.url;
    });
  }

/*

Exercise 19: Reducing with an initial value

Sometimes when we reduce an array, we want the reduced value to be a different
type than the items stored in the array. Let's say we have an array of videos
and we want to reduce them to a single map where the key is the video id and the
value is the video's title.

*/

function() {
  var videos = [
  {
    "id": 65432445,
    "title": "The Chamber"
  },
  {
    "id": 675465,
    "title": "Fracture"
  },
  {
    "id": 70111470,
    "title": "Die Hard"
  },
  {
    "id": 654356453,
    "title": "Bad Boys"
  }
  ];

  // Expecting this output...
  // [
  //   {
  //     "65432445": "The Chamber",
  //     "675465": "Fracture",
  //     "70111470": "Die Hard",
  //     "654356453": "Bad Boys"
  //   }
  // ]
  return videos.
  reduce(function(accumulatedMap, video) {
    var obj = {};
    obj[video.id] = video.title;

    // ----- INSERT CODE TO ADD THE VIDEO TITLE TO THE ----
    // ----- NEW MAP USING THE VIDEO ID AS THE KEY   ----

    // Object.assign() takes all of the enumerable properties from
    // the object listed in its second argument (obj) and assigns them
    // to the object listed in its first argument (accumulatedMap).
    return Object.assign(accumulatedMap, obj);
  },
    // Use an empty map as the initial value instead of the first item in
    // the list.
    {});
}

/*

Exercise 20: Retrieve the id, title, and smallest box art url for every video.

This is a variation of the problem we solved earlier, where we retrieved the url
of the boxart with a width of 150px. This time we'll use reduce() instead of
filter() to retrieve the smallest box art in the boxarts array.

*/

function() {
  var movieLists = [
  {
    name: "New Releases",
    videos: [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxarts": [
      { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
      ],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxarts": [
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
      { width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

      ],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    }
    ]
  },
  {
    name: "Thrillers",
    videos: [
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxarts": [
      { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
      ],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxarts": [
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
      { width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
      { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
      ],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    }
    ]
  }
  ];


  // Use one or more concatMap, map, and reduce calls to create an array with the following items (order doesn't matter)
  // [
  //   {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
  //   {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
  //   {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
  //   {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
  // ];

  return movieLists.concatMap(function(movieList) {
    return movieList.videos.concatMap(function(movies) {
      return movies.boxarts.reduce(function(accumulator, currentElem) {
        if (accumulator.width * accumulator.height < currentElem.width * currentElem.height) {
          return accumulator;
        } else {
          return currentElem;
        }
      }).map(function(boxart) {
        return ({id: movies.id, title: movies.title, boxart: boxart.url});
      });
    });
  });
}

/*

Zipping Arrays
Sometimes we need to combine two arrays by progressively taking an item from each and combining the pair. If you visualize a zipper, where each side is an array, and each tooth is an item, you'll have a good idea of how the zip operation works.

Exercise 21: Combine videos and bookmarks by index

Use a for loop to traverse the videos and bookmarks array at the same time. For each video and bookmark pair, create a {videoId, bookmarkId} pair and add it to the videoIdAndBookmarkIdPairs array.

*/

function() {
  var videos = [
  {
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
  },
  {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
  },
  {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
  },
  {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
  }
  ],
  bookmarks = [
  {id: 470, time: 23432},
  {id: 453, time: 234324},
  {id: 445, time: 987834}
  ],
  counter,
  videoIdAndBookmarkIdPairs = [];

  for(counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
    videoIdAndBookmarkIdPairs.push({videoId: videos[counter].id, bookmarkId: bookmarks[counter].id});
    // Insert code here to create a {videoId, bookmarkId} pair and add it to the videoIdAndBookmarkIdPairs array.
  }

  return videoIdAndBookmarkIdPairs;
}

/*

Exercise 22: Implement zip

Let's add a static zip() function to the Array type. The zip function accepts a combiner function, traverses each array at the same time, and calls the combiner function on the current item on the left-hand-side and right-hand-side. The zip function requires an item from each array in order to call the combiner function, therefore the array returned by zip will only be as large as the smallest input array.

*/

// JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'

Array.zip = function(left, right, combinerFunction) {
  var counter,
  results = [];

  for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
    // Add code here to apply the combinerFunction to the left and right-hand items in the respective arrays
    results.push(combinerFunction(left[counter], right[counter]));

  }

  return results;
};


/*

Exercise 23: Combine videos and bookmarks by index

Let's repeat exercise 21, but this time lets use your new zip() function. For each video and bookmark pair, create a {videoId, bookmarkId} pair

*/

function() {
  var videos = [
  {
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
  },
  {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
  },
  {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
  },
  {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
  }
  ],
  bookmarks = [
  {id: 470, time: 23432},
  {id: 453, time: 234324},
  {id: 445, time: 987834}
  ];

  return Array.
  zip(videos, bookmarks, function(left, right) {
    return  ({videoID: left.id, bookmarkId: right.id});
  });
}

/*

Exercise 24: Retrieve each video's id, title, middle interesting moment time, and smallest box art url.

This is a variation of the problem we solved earlier. This time each video has an interesting moments collection, each representing a time during which a screenshot is interesting or representative of the title as a whole. Notice that both the boxarts and interestingMoments arrays are located at the same depth in the tree. Retrieve the time of the middle interesting moment and the smallest box art url simultaneously with zip(). Return an {id, title, time, url} object for each video.

*/

function() {
  var movieLists = [
  {
    name: "New Releases",
    videos: [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxarts": [
      { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
      ],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "interestingMoments": [
      { type: "End", time:213432 },
      { type: "Start", time: 64534 },
      { type: "Middle", time: 323133}
      ]
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxarts": [
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
      { width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

      ],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "interestingMoments": [
      { type: "End", time:54654754 },
      { type: "Start", time: 43524243 },
      { type: "Middle", time: 6575665}
      ]
    }
    ]
  },
  {
    name: "Instant Queue",
    videos: [
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxarts": [
      { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
      ],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "interestingMoments": [
      { type: "End", time:132423 },
      { type: "Start", time: 54637425 },
      { type: "Middle", time: 3452343}
      ]
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxarts": [
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
      { width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
      { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
      ],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "interestingMoments": [
      { type: "End", time:45632456 },
      { type: "Start", time: 234534 },
      { type: "Middle", time: 3453434}
      ]
    }
    ]
  }
  ];

  //------------ COMPLETE THIS EXPRESSION --------------//
  /*
  Return an {id, title, time, url} object for each video.
  return movieLists.
  */
  return movieLists.concatMap(function(movieList) {
    return movieList.videos.concatMap(function(video) {
      return Array.zip(
        video.boxarts.reduce(function(accumulator,currentElem) {
          if (accumulator.width * accumulator.height < currentElem.width * currentElem.height) {
            return accumulator;
          }
          else {
            return currentElem;
          }
        }),
        video.interestingMoments.filter(function(moments) {
          return moments.type === "Middle";
        }),
        function(boxart, moments) {
          return {id: video.id, title: video.title, time: moments.time, url: boxart.url};
        });
    });
  });
}

