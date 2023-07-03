// Rewriting Codewars problems in Javascript
// https://www.codewars.com/kata/525c65e51bf619685c000059/
// Original (Python) solution 
// def cakes(recipe, available):
//     return min(available.get(k, 0)/recipe[k] for k in recipe)

function cakes(recipe, available) {
  return Math.floor(
    Math.min(
      ...Object.keys(recipe).map((k) => available[k] / recipe[k] || 0)
    )
  );
}

// https://www.codewars.com/kata/54d81488b981293527000c8f
// Original (Python) solution
// def sum_pairs(ints, s):
//    """
//    Given a list of integers (int) and a single sum value (s), 
//    return the first two values (parse from the left please) 
//    in order of appearance that add up to form the sum.
    
//    Time and space complexity (O(n)) for both.
//    1. Iterate through the list of integers.
//    2. Calculate the complement between that integer and the sum.
//    3. Check if we have that combination of complement and integer.
//    4. Add to that set of seen integers. 
//    """
//    seen = set() # Keep track of which numbers we've seen. 
    
//    for num in ints: # Iterate through the list of integers
//        complement = s - num # Find the complement of what we need to 
//                             # add to get the sum. 
//        if complement in seen: # If the complement is in the set of what we've seen,
//            return [complement, num] # Return that complement and the number. 
        
//        seen.add(num) # Add it to the list of seen integers.
    
//    return None
function sum_pairs(ints, s) {
  let seen = new Set(); // Keep track of which numbers we've seen.

  for (let num of ints) { // Iterate through the list of integers
    let complement = s - num; // Find the complement of what we need to add to get the sum.
    if (seen.has(complement)) { // If the complement is in the set of what we've seen,
      return [complement, num]; // Return that complement and the number.
    }

    seen.add(num); // Add it to the set of seen integers.
  }

  return null;
}
