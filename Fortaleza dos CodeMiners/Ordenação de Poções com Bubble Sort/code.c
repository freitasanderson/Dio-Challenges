#include<stdio.h>
#include<stdlib.h>

void trocar(int *a, int *b){ 
    int temp = *a; 
    *a = *b; 
    *b = temp; 
}

void bubbleSort(int array[], int quantidade){ 
  // TODO: Implemente o algoritmo "Bubble Sort".
  // Dica: O método "trocar" pode ser útil ;)
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
  int frascos[quantidade];
  for (int i = 0; i < quantidade; i++) {
      scanf("%d", &frascos[i]);
  }
  
  // Executa o algoritmo "bubbleSort" para ordenar os "frascos".
  bubbleSort(frascos, quantidade);
  
  // Imprime os "frascos" ordenados.
  for (int i = 0; i < quantidade; i++) {
      printf("%d ", frascos[i]);
  }
  
  return 0;
}