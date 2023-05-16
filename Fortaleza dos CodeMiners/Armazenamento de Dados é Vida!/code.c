#include <stdio.h>

int main() {
  int capacidadeAtual, aumentoPercentual, capacidadeNova;
  
  // Lê as entradas do usuário
  scanf("%d %d", &capacidadeAtual, &aumentoPercentual);

  // TODO: Declare e calcule a nova capacidade do disco de Mithril.
  capacidadeNova = capacidadeAtual+((aumentoPercentual*capacidadeAtual)/100);
  
  printf("%d",capacidadeNova);
  // TODO: Imprima a nova capacidade.

  return 0;
}