export class Parceiro {
    public nome: string;
    public distancia: string;
    public veiculo: string;
    public placa: string;
    public km?: number;
    public imagem: string = "https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg";
  
    constructor(nome: string, distancia?: string, veiculo?: string, placa?: string){
      this.nome = nome;
      this.distancia = distancia;
      this.veiculo = veiculo;
      this.placa = placa;
    }  
  }