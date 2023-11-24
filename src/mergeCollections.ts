
interface MergeCollections {
  mergeAndSort(collection_1: number[], collection_2: number[]): number[];
}

const quickSort = (arr : number[]) : number[] => {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let index = 1; index < arr.length; index++) {
        arr[index] < pivot ? left.push(arr[index]) : right.push(arr[index]);
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

export const  mergeCollections : MergeCollections = {
    mergeAndSort : (collection1,collection2) => {
          const mergedCollections = [...collection1, ...collection2];
          return quickSort(mergedCollections);
    }
}


