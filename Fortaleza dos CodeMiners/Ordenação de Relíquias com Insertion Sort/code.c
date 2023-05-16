#include <stdio.h>
#include <stdlib.h>

void trocar(int *a, int *b){ 
    int temp = *a; 
    *a = *b; 
    *b = temp; 
}

void insertionSort(int array[], int quantidade) {
  // TODO: Implemente o algoritmo de ordenação "Insertion Sort".
  int j = 0;
  
  while(j < quantidade){
      
      for(int i= 0 ; i < quantidade; i++){
        
        if ((array[i] > array[i+1]) && i < quantidade-1) {
          trocar(&array[i],&array[i+1]);
          i--;
        }
        
      }
    j++;
  }
}

int main() {
  // Lê os nossos dados de entrada:
  int quantidade;
  scanf("%d", &quantidade);
  int  reliquias[quantidade];
  for (int i = 0; i < quantidade; i++) {
    scanf("%d", & reliquias[i]);
  }

  // Executa o algoritmo "insertionSort" para ordenar os "reliquias".
  insertionSort(reliquias, quantidade);

  // Imprime as "reliquias" ordenados
  for (int i = 0; i < quantidade; i++) {
    printf("%d ",  reliquias[i]);
  }
  return 0;
}