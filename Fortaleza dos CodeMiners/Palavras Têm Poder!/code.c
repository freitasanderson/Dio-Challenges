#include <stdio.h>
#include <string.h>

// Função que recebe uma string e inverte a ordem das letras.
void inverter(char palavra[]) {
  // TODO: Implemente a lógica para inverter a "palavra".
  char arvalap[strlen(palavra)];
  
  int j = 0;
  int i = 0;
  
  for(i = strlen(palavra)-1; i>=0;i--){
     arvalap[j] = palavra[i];
     j++;
  }
  
  for(i = 0; i< strlen(arvalap); i++){
     palavra[i] = arvalap[i];
  }
  
}

int main() {
  char palavra[100];

  // Lê a palavra a ser invertida do usuário.
  scanf("%s", palavra);

  // Chama a função que inverte a palavra.
  inverter(palavra);

  // Imprime a palavra invertida na tela.
  printf("%s", palavra);

  return 0;
}