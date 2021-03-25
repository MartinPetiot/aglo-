tab = [5,8,2,7,1,9,3,4]
let n = tab.length;
// console.log(tab)
// function tri_insertion(tab) {
//
//     for (let i = 0; i < n; i++) {
//         temp = tab[i];
//
//         j = i;
//         while (j > 0 && tab[j - 1] > temp) {
//             tab[j] = tab[j-1];
//             j = j-1;
//         }
//         tab[j]=temp;
//         console.log(temp)
//     }
// }
// tri_insertion(tab);
// console.log(tab)

// function  tri_selection(tab){
//     for (let i = 0; i<n;i++){
//         let min = i;
//         for (let j = min+1;j<n;j++){
//             if (tab[j]<tab[min]){
//                 const tempmin = tab[min];
//                 const tempj = tab[j];
//                 tab[min] = tempj;
//                 tab[j] = tempmin
//             }
//         }
//     }
// }
// tri_selection(tab);
// console.log(tab)

// function tri_bulle(tab){
//     passage = 0;
//     permut=true;
//     while (permut){
//         permut=false;
//         for (let i = 0; i<n-1;i++){
//             if (tab[i]>tab[i+1]){
//                 let min = tab[i];
//                 tab[i]=tab[i+1];
//                 tab[i+1]=min;
//                 permut=true;
//             }
//         }
//         passage = passage+1;
//     }
// }
// tri_bulle(tab)
// console.log(tab)

function tri_fusion(tab){
    if (n<=1){

        console.log(tab)
    }
    else {
        return fusion(tri_fusion(tab[n/2]),tri_fusion(tab[n>n/2]))
    }
}
function fusion(tab1,tab2){
    if (tab1 =[]){
        return tab2;
        if (tab2= []){
            return tab1;
        }
        if (tab1[1] <= tab2[1]){
            let newt = tab1[1].concat(fusion())
        }
    }

}
tri_fusion(tab)
console.log(tab)