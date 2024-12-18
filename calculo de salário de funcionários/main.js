const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
const fs = require('fs')
const chalk = require('chalk')

const Funcionario = require('./funcionario/funcionario')
const Tecnico = require('./tecnico/tecnico')
const Supervisor = require('./supervisor/supervisor')
const Gerente = require('./gerente/gerente')


function carregarDados(caminho) {
    if (fs.existsSync(caminho)) {
      const conteudo = fs.readFileSync(caminho, 'utf8');
      return JSON.parse(conteudo);
    } else {
      return []; // Retorna um array vazio se o arquivo não existir
    }
  }

function salvarDados(caminhoArquivo, dados) {
    try {
      const dadosFormatados = JSON.stringify(dados, null, 2); // Transforma em texto bonito
      fs.writeFileSync(caminhoArquivo, dadosFormatados, 'utf8'); // Escreve no arquivo
      console.log('Dados salvos com sucesso!');
    } catch (erro) {
      console.error('Erro ao salvar os dados:', erro.message)
    }
    mostrarMenu()
  }

  function exibirFuncionarios() {
    console.log('\nLista de Funcionários:\n');
  
    dados.forEach((funcionario, index) => {
      console.log(`Funcionário ${index + 1}`);
      console.log(`Nome: ${funcionario._nome}`);
      console.log(`Matrícula: ${funcionario._matricula}`);
      console.log(`Função: ${funcionario._funcao}`);
      console.log(`Área: ${funcionario._divisao}`);
      console.log(`Salário: R$ ${funcionario._salario}`);
      console.log('---');
    });
  
    mostrarMenu()
  }
  

  function adicionarFuncionario(callback) {
    readline.question('Digite o nome do funcionário: ', (nome) => {
      readline.question('Digite a matrícula: ', (matricula) => {
        readline.question('Digite a função (Técnico, Supervisor, Gerente): ', (funcao) => {
          readline.question('Digite a área: ', (area) => {
            readline.question('Digite o salário: ', (salario) => {
              // Criação do objeto compatível com o JSON
              const novoFuncionario = {
                _nome: nome.trim(),
                _matricula: matricula.trim(),
                _funcao: funcao.trim(),
                _divisao: area.trim(),
                _salario: parseFloat(salario.trim())
              };
  
              dados.push(novoFuncionario); // Adiciona ao array de dados
              salvarDados(caminhoArquivo, dados); // Salva no arquivo JSON
  
              console.log(chalk.green('Funcionário adicionado com sucesso!'));
              callback(); // Retorna ao menu principal
            });
          });
        });
      });
    });
  }
  
  

  
  function removerFuncionario(dados, readline, salvarDadosFunc, caminhoArquivo) {
    readline.question('Digite a matrícula do funcionário que deseja remover: ', (matricula) => {
      // Comparação entre strings
      const index = dados.findIndex((f) => String(f._matricula) === String(matricula.trim()));
  
      if (index !== -1) {
        dados.splice(index, 1); // Remove o funcionário da lista
        salvarDadosFunc(caminhoArquivo, dados); // Salva no JSON
        console.log(chalk.green('Funcionário removido com sucesso!'));
      } else {
        console.log(chalk.red('Funcionário não encontrado.'));
      }
      mostrarMenu();
    });
  }
  
  


  function alterarFuncionario(dados, readline, salvarDadosFunc, caminhoArquivo) {
    readline.question('Digite a matrícula do funcionário que deseja alterar: ', (matricula) => {
      const funcionario = dados.find((f) => String(f._matricula) === String(matricula.trim()));
  
      if (funcionario) {
        readline.question('Digite o novo nome ou pressione Enter para manter: ', (nome) => {
          readline.question('Digite a nova função ou pressione Enter para manter: ', (funcao) => {
            readline.question('Digite o novo salário ou pressione Enter para manter: ', (salario) => {
              funcionario._nome = nome.trim() || funcionario._nome;
              funcionario._funcao = funcao.trim() || funcionario._funcao;
              funcionario._salario = salario ? parseFloat(salario.trim()) : funcionario._salario;
  
              salvarDadosFunc(caminhoArquivo, dados);
              console.log(chalk.green('Dados alterados com sucesso!'));
              mostrarMenu();
            });
          });
        });
      } else {
        console.log(chalk.red('Funcionário não encontrado.'));
        mostrarMenu();
      }
    });
  }
  function alterarFuncionario(dados, readline, salvarDadosFunc, caminhoArquivo) {
    readline.question('Digite a matrícula do funcionário que deseja alterar: ', (matricula) => {
      const funcionario = dados.find((f) => String(f._matricula) === String(matricula.trim()));
  
      if (funcionario) {
        readline.question('Digite o novo nome ou pressione Enter para manter: ', (nome) => {
          readline.question('Digite a nova função ou pressione Enter para manter: ', (funcao) => {
            readline.question('Digite o novo salário ou pressione Enter para manter: ', (salario) => {
              funcionario._nome = nome.trim() || funcionario._nome;
              funcionario._funcao = funcao.trim() || funcionario._funcao;
              funcionario._salario = salario ? parseFloat(salario.trim()) : funcionario._salario;
  
              salvarDadosFunc(caminhoArquivo, dados);
              console.log(chalk.green('Dados alterados com sucesso!'));
              mostrarMenu();
            });
          });
        });
      } else {
        console.log(chalk.red('Funcionário não encontrado.'));
        mostrarMenu();
      }
    });
  }
    

  
  /*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });*/
  
  const caminhoArquivo = 'funcionarios.json';
  let dados = carregarDados(caminhoArquivo);
  
  function mostrarMenu() {
    console.log('\nEscolha uma opção:');
    console.log('[1] Exibir todos os funcionários');
    console.log('[2] Adicionar um funcionário');
    console.log('[3] Remover um funcionário');
    console.log('[4] Alterar dados de um funcionário');
    console.log('[5] Sair');
  
    readline.question('Digite sua opção: ', (opcao) => {
      switch (opcao) {
        case '1':
          exibirFuncionarios(dados);
          mostrarMenu();
          break;
        case '2':
          adicionarFuncionario(dados, readline, salvarDados, caminhoArquivo);
          mostrarMenu();
          break;
        case '3':
          removerFuncionario(dados, readline, salvarDados, caminhoArquivo);
          mostrarMenu();
          break;
        case '4':
          alterarFuncionario(dados, readline, salvarDados, caminhoArquivo);
          mostrarMenu();
          break;
        case '5':
          console.log('Saindo...');
          readline.close();
          break;
        default:
          console.log('Opção inválida.');
          mostrarMenu();
      }
    });
  }

  mostrarMenu();
  
  
