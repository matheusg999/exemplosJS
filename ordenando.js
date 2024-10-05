const swap = (arr, pos1, pos2) => {
    let temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
};

const shuffle = (arr, exchanges) => {
    for (let i = 0; i < exchanges; i++) {
        let pos1 = Math.floor(Math.random() * arr.length);
        let pos2 = Math.floor(Math.random() * arr.length);
        swap(arr, pos1, pos2);
    }
};

const bubble_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
};

const selection_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }
};

const quick_sort = (arr, low, high) => {
    if (low < high) {
        let pivotIndex = particionamento(arr, low, high);
        quick_sort(arr, low, pivotIndex - 1);
        quick_sort(arr, pivotIndex + 1, high);
    }
};

const particionamento = (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
};
