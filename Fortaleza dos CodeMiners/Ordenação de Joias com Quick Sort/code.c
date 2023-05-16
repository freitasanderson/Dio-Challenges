#include <stdio.h>
#include <stdlib.h>

void trocar(int *a, int *b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

void quickSort(int array[], int inicio, int fim){ 
  // TODO: Implemente o algoritmo "Quick Sort" para ordenação.
  // Dica: O método "trocar" pode ser útil ;)
  int j = 0;
  
  while(j <= fim){
      
      for(int i= inicio ; i <= fim; i++){
        
        if ((array[i] > array[i+1]) && i < fim) {
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
  int joias[quantidade];
  for (int i = 0; i < quantidade; i++) {
      scanf("%d", &joias[i]);
  }
  
  int inicio = 0;
  int fim = quantidade - 1;
  // Executa o algoritmo "quickSort" para ordenar as "joias".
  quickSort(joias, inicio, fim);
  
  // Imprime as "joias" ordenadas.
  for (int i = 0; i < quantidade; i++) {
      printf("%d ", joias[i]);
  }
  
  return 0;
}