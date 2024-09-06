// Substitua o fetch por uma variável contendo os dados
let cepsData = [
    {
        "logradouro": "Área Rural",
        "cep": "14869-899",
        "bairro": "Área Rural de Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Avenida Américo Dezorzi",
        "cep": "14861-176",
        "bairro": "Vila Recreio",
        "tipo": "Seccionamento",
        "numeros": "até 631 - lado ímpar"
    },
    {
        "logradouro": "Avenida Américo Dezorzi",
        "cep": "14861-180",
        "bairro": "Jardim Vera Lúcia I",
        "tipo": "Seccionamento",
        "numeros": "de 633 ao fim - lado ímpar"
    },
    {
        "logradouro": "Avenida Américo Dezorzi",
        "cep": "14864-028",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Seccionamento",
        "numeros": "até 998 - lado par"
    },
    {
        "logradouro": "Avenida Américo Dezorzi",
        "cep": "14864-222",
        "bairro": "Jardim Vera Lucia II",
        "tipo": "Seccionamento",
        "numeros": "de 1000 ao fim - lado par"
    },
    {
        "logradouro": "Avenida Antônio Carlos Lisboa",
        "cep": "14861-182",
        "bairro": "Jardim Vera Lúcia I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Avenida Benedito Raimundo de Souza",
        "cep": "14866-330",
        "bairro": "Nova Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Avenida Bernardino Boer",
        "cep": "14866-324",
        "bairro": "Nova Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Avenida Doutor João Carlos Bombonato",
        "cep": "14864-244",
        "bairro": "Jardim Califórnia I",
        "tipo": "Seccionamento",
        "numeros": "803/804 a 1023/1024"
    },
    {
        "logradouro": "Avenida Doutor João Carlos Bombonato",
        "cep": "14864-282",
        "bairro": "Jardim Califórnia II",
        "tipo": "Seccionamento",
        "numeros": "1033/1034 a 1183/1184"
    },
    {
        "logradouro": "Avenida Doutor João Carlos Bombonato",
        "cep": "14864-294",
        "bairro": "Jardim Colorado I",
        "tipo": "Seccionamento",
        "numeros": "1193/1194 a 1425/1426"
    },
    {
        "logradouro": "Avenida Doutor João Carlos Bombonato",
        "cep": "14864-324",
        "bairro": "Jardim Colorado II",
        "tipo": "Seccionamento",
        "numeros": "1435/1436 a 1625/1626"
    },
    {
        "logradouro": "Avenida Eva Barroso Oliveira",
        "cep": "14861-006",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Avenida Feliciano Badia",
        "cep": "14861-050",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Avenida Felipe Daher",
        "cep": "14860-118",
        "bairro": "Parque Mogi",
        "tipo": "Seccionamento",
        "numeros": "lado ímpar"
    },
    {
        "logradouro": "Avenida Felipe Daher",
        "cep": "14861-000",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Seccionamento",
        "numeros": "lado par"
    },
    {
        "logradouro": "Avenida Giovani Marcari",
        "cep": "14866-150",
        "bairro": "Distrito Industrial",
        "tipo": "Seccionamento",
        "numeros": null
    },
    {
        "logradouro": "Avenida Giovani Marcari",
        "cep": "14866-300",
        "bairro": "Jardim Paineiras",
        "tipo": "Seccionamento",
        "numeros": null
    },
    {
        "logradouro": "Avenida Doutor Gumercindo Veludo",
        "cep": "14860-017",
        "bairro": "Centro",
        "tipo": "Seccionamento",
        "numeros": "de 380/381 a 998/999"
    },
    {
        "logradouro": "Avenida Doutor Gumercindo Veludo",
        "cep": "14860-078",
        "bairro": "Jardim Higienópolis",
        "tipo": "Seccionamento",
        "numeros": "até 378/379"
    },
    {
        "logradouro": "Avenida Doutor Gumercindo Veludo",
        "cep": "14861-102",
        "bairro": "Vila Nova Barrinha",
        "tipo": "Seccionamento",
        "numeros": "de 1000/1001 a 1348/1349"
    },
    {
        "logradouro": "Avenida Doutor Gumercindo Veludo",
        "cep": "14861-144",
        "bairro": "Vila Recreio",
        "tipo": "Seccionamento",
        "numeros": "de 1350/1351 ao fim"
    },
    {
        "logradouro": "Avenida Jamil Said Ahmed Saleh",
        "cep": "14866-006",
        "bairro": "Jardim Paulista",
        "tipo": "Seccionamento",
        "numeros": "até 1200/1225"
    },
    {
        "logradouro": "Avenida Jamil Said Ahmed Saleh",
        "cep": "14866-056",
        "bairro": "Jardim Lisboa",
        "tipo": "Seccionamento",
        "numeros": "de 1220/1231 à 1797/1798"
    },
    {
        "logradouro": "Avenida João Marques Sales",
        "cep": "14866-328",
        "bairro": "Nova Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Avenida José Geraldo Antônio",
        "cep": "14866-332",
        "bairro": "Nova Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Avenida José Krumpos",
        "cep": "14866-142",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Avenida Luiz Soares Lima",
        "cep": "14866-338",
        "bairro": "Nova Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Avenida Mariana de Souza Gomes",
        "cep": "14864-300",
        "bairro": "Jardim Colorado I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Avenida Odelina Pereira da Silva",
        "cep": "14866-342",
        "bairro": "Nova Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Avenida Presidente Castelo Branco",
        "cep": "14860-009",
        "bairro": "Centro",
        "tipo": "Seccionamento",
        "numeros": "de 200 a 998 - lado par"
    },
    {
        "logradouro": "Avenida Presidente Castelo Branco",
        "cep": "14860-011",
        "bairro": "Centro",
        "tipo": "Seccionamento",
        "numeros": "de 201 a 999 - lado ímpar"
    },
    {
        "logradouro": "Avenida Presidente Castelo Branco",
        "cep": "14860-072",
        "bairro": "Jardim Higienópolis",
        "tipo": "Seccionamento",
        "numeros": "até 198/199"
    },
    {
        "logradouro": "Avenida Presidente Castelo Branco",
        "cep": "14861-108",
        "bairro": "Vila Nova Barrinha",
        "tipo": "Seccionamento",
        "numeros": "de 1001 a 1209 - lado ímpar"
    },
    {
        "logradouro": "Avenida Presidente Castelo Branco",
        "cep": "14861-150",
        "bairro": "Vila Recreio",
        "tipo": "Seccionamento",
        "numeros": "de 1211 a 1899 - lado ímpar"
    },
    {
        "logradouro": "Avenida Presidente Castelo Branco",
        "cep": "14861-152",
        "bairro": "Vila Recreio",
        "tipo": "Seccionamento",
        "numeros": "de 1000 a 1898 - lado par"
    },
    {
        "logradouro": "Avenida Presidente Castelo Branco",
        "cep": "14861-184",
        "bairro": "Jardim Vera Lúcia I",
        "tipo": "Seccionamento",
        "numeros": "de 1900/1901 ao fim"
    },
    {
        "logradouro": "Avenida Presidente Costa e Silva",
        "cep": "14860-019",
        "bairro": "Centro",
        "tipo": "Seccionamento",
        "numeros": "de 10 à 420 lado par"
    },
    {
        "logradouro": "Avenida Presidente Costa e Silva",
        "cep": "14861-110",
        "bairro": "Vila Nova Barrinha",
        "tipo": "Seccionamento",
        "numeros": "de 11 à 419 lado ímpar"
    },
    {
        "logradouro": "Avenida Presidente Costa e Silva",
        "cep": "14861-120",
        "bairro": "Vila Recreio",
        "tipo": "Seccionamento",
        "numeros": "de 469 à 999 lado ímpar"
    },
    {
        "logradouro": "Avenida Presidente Costa e Silva",
        "cep": "14864-000",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Seccionamento",
        "numeros": "de 1001 à 1799 lado ímpar"
    },
    {
        "logradouro": "Avenida Presidente Costa e Silva",
        "cep": "14864-106",
        "bairro": "Jardim Belo Horizonte",
        "tipo": "Seccionamento",
        "numeros": "de 1801 à 1999 lado ímpar"
    },
    {
        "logradouro": "Avenida Presidente Costa e Silva",
        "cep": "14866-000",
        "bairro": "Jardim Paulista",
        "tipo": "Seccionamento",
        "numeros": "de 468 à 1560 lado par"
    },
    {
        "logradouro": "Avenida Presidente Costa e Silva",
        "cep": "14866-052",
        "bairro": "Jardim Lisboa",
        "tipo": "Seccionamento",
        "numeros": "de 1570 à 1800 lado par"
    },
    {
        "logradouro": "Avenida Presidente Costa e Silva",
        "cep": "14864-600",
        "bairro": "Eplatz Barrinha",
        "tipo": "Seccionamento",
        "numeros": "de 2001 ao fim - lado ímpar"
    },
    {
        "logradouro": "Avenida Presidente Kennedy",
        "cep": "14860-013",
        "bairro": "Centro",
        "tipo": "Seccionamento",
        "numeros": "de 100/101 a 1087/1088"
    },
    {
        "logradouro": "Avenida Presidente Kennedy",
        "cep": "14860-074",
        "bairro": "Jardim Higienópolis",
        "tipo": "Seccionamento",
        "numeros": "até 98/99"
    },
    {
        "logradouro": "Avenida Presidente Kennedy",
        "cep": "14861-106",
        "bairro": "Vila Nova Barrinha",
        "tipo": "Seccionamento",
        "numeros": "de 1089/1090 a 1288/1289"
    },
    {
        "logradouro": "Avenida Presidente Kennedy",
        "cep": "14861-148",
        "bairro": "Vila Recreio",
        "tipo": "Seccionamento",
        "numeros": "de 1290/1291 ao fim"
    },
    {
        "logradouro": "Avenida Presidente Vargas",
        "cep": "14860-015",
        "bairro": "Centro",
        "tipo": "Seccionamento",
        "numeros": "de 340/341 a 1038/1039"
    },
    {
        "logradouro": "Avenida Presidente Vargas",
        "cep": "14860-076",
        "bairro": "Jardim Higienópolis",
        "tipo": "Seccionamento",
        "numeros": "até 338/339"
    },
    {
        "logradouro": "Avenida Presidente Vargas",
        "cep": "14861-104",
        "bairro": "Vila Nova Barrinha",
        "tipo": "Seccionamento",
        "numeros": "de 1040/1041 a 1328/1329"
    },
    {
        "logradouro": "Avenida Presidente Vargas",
        "cep": "14861-146",
        "bairro": "Vila Recreio",
        "tipo": "Seccionamento",
        "numeros": "de 1330/1331 ao fim"
    },
    {
        "logradouro": "Avenida Professora Ruth Brunini",
        "cep": "14866-340",
        "bairro": "Nova Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Avenida Santiago Felipe",
        "cep": "14866-326",
        "bairro": "Nova Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Avenida Valdemar Firmino da Silva",
        "cep": "14866-334",
        "bairro": "Nova Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Avenida Vereador Julio Marcari",
        "cep": "14860-001",
        "bairro": "Centro",
        "tipo": "Seccionamento",
        "numeros": "de 500/501 a 1243/1244"
    },
    {
        "logradouro": "Avenida Vereador Julio Marcari",
        "cep": "14860-058",
        "bairro": "Jardim Raya",
        "tipo": "Seccionamento",
        "numeros": "de 1245/1246 ao fim"
    },
    {
        "logradouro": "Avenida Vereador Julio Marcari",
        "cep": "14861-114",
        "bairro": "Vila Nova Barrinha",
        "tipo": "Seccionamento",
        "numeros": "até 338/339"
    },
    {
        "logradouro": "Avenida Vereador Julio Marcari",
        "cep": "14861-154",
        "bairro": "Vila Recreio",
        "tipo": "Seccionamento",
        "numeros": "de 340/341 a 498/499"
    },
    {
        "logradouro": "Avenida Vereador Mário de Andrade Neto",
        "cep": "14866-336",
        "bairro": "Nova Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Avenida Yoshiro Takahashi",
        "cep": "14861-100",
        "bairro": "Vila Nova Barrinha",
        "tipo": "Seccionamento",
        "numeros": "até 298/299"
    },
    {
        "logradouro": "Avenida Yoshiro Takahashi",
        "cep": "14861-142",
        "bairro": "Vila Recreio",
        "tipo": "Seccionamento",
        "numeros": "de 300/301 ao fim"
    },
    {
        "logradouro": "Estrada do Limoeiro",
        "cep": "14866-154",
        "bairro": "Distrito Industrial",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Praça Antonio do Prado",
        "cep": "14860-027",
        "bairro": "Centro",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua A1",
        "cep": "14860-220",
        "bairro": "Recanto Beija Flor",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Adelaido Neres Batista",
        "cep": "14866-372",
        "bairro": "Jardim Ouro Verde",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Adelia Baptista",
        "cep": "14864-612",
        "bairro": "Eplatz Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Adelino da Silva Oliveira",
        "cep": "14864-314",
        "bairro": "Jardim Colorado II",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Adelino José Valério de Oliveira",
        "cep": "14864-216",
        "bairro": "Jardim Novo Horizonte",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Adilson Medeiros",
        "cep": "14861-190",
        "bairro": "Jardim Vera Lúcia I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Airton Nogueira",
        "cep": "14864-624",
        "bairro": "Eplatz Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Alberta Marcari",
        "cep": "14860-005",
        "bairro": "Centro",
        "tipo": "Seccionamento",
        "numeros": "de 400 ao fim - lado par"
    },
    {
        "logradouro": "Rua Alberta Marcari",
        "cep": "14860-007",
        "bairro": "Centro",
        "tipo": "Seccionamento",
        "numeros": "de 191 ao fim - lado ímpar"
    },
    {
        "logradouro": "Rua Alberta Marcari",
        "cep": "14860-066",
        "bairro": "Jardim Raya",
        "tipo": "Seccionamento",
        "numeros": "de 190 a 398 - lado par"
    },
    {
        "logradouro": "Rua Alberta Marcari",
        "cep": "14860-070",
        "bairro": "Jardim Higienópolis",
        "tipo": "Seccionamento",
        "numeros": "até 188/189"
    },
    {
        "logradouro": "Rua Albertino Vieira",
        "cep": "14864-036",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Alcebíades Bortolote",
        "cep": "14866-060",
        "bairro": "Jardim Lisboa",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Alcides Prudêncio",
        "cep": "14864-034",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Seccionamento",
        "numeros": "até 208/209"
    },
    {
        "logradouro": "Rua Alcides Prudêncio",
        "cep": "14864-082",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Seccionamento",
        "numeros": "de 210/211 ao fim"
    },
    {
        "logradouro": "Rua Alessandro Virgilio Merli",
        "cep": "14860-214",
        "bairro": "Vila São José",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Alexandre Carreira",
        "cep": "14860-064",
        "bairro": "Jardim Raya",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Alice Merli de Castro",
        "cep": "14864-310",
        "bairro": "Jardim Colorado II",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Amélia Zanini Bombonatti",
        "cep": "14860-023",
        "bairro": "Centro",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Anastácio Leonardo",
        "cep": "14860-084",
        "bairro": "Jardim Higienópolis",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Andréia Guimarães Cavalcanti",
        "cep": "14864-302",
        "bairro": "Jardim Colorado I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Antonio Alves Borges",
        "cep": "14864-100",
        "bairro": "Jardim Belo Horizonte",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Antônio Arábia",
        "cep": "14861-122",
        "bairro": "Vila Recreio",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Antônio Garcia Cabrera",
        "cep": "14864-002",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Antonio Gonçalez Soriano",
        "cep": "14860-039",
        "bairro": "Centro",
        "tipo": "Seccionamento",
        "numeros": "lado ímpar"
    },
    {
        "logradouro": "Rua Antonio Gonçalez Soriano",
        "cep": "14860-080",
        "bairro": "Jardim Higienópolis",
        "tipo": "Seccionamento",
        "numeros": "lado par"
    },
    {
        "logradouro": "Rua Antonio Gonçalves Ferreira",
        "cep": "14866-128",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Antônio Menegussi Sobrinho",
        "cep": "14864-012",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Seccionamento",
        "numeros": "lado par"
    },
    {
        "logradouro": "Rua Antônio Menegussi Sobrinho",
        "cep": "14864-014",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Seccionamento",
        "numeros": "lado ímpar"
    },
    {
        "logradouro": "Rua Antônio Pereira da Silva",
        "cep": "14864-024",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Antonio Roberto Alves",
        "cep": "14864-308",
        "bairro": "Jardim Colorado I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Antonio Rodrigues da Silva",
        "cep": "14866-010",
        "bairro": "Jardim Paulista",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Aparecido Marcari Toledo",
        "cep": "14866-368",
        "bairro": "Jardim Ouro Verde",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Arlindo Rodrigues da Silva",
        "cep": "14866-126",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Armando Garcia Palma",
        "cep": "14864-234",
        "bairro": "Jardim Vera Lucia II",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Arnaldo Pereira",
        "cep": "14860-122",
        "bairro": "Parque Mogi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Augusto Pavan",
        "cep": "14866-116",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Aurora Mesquita de Andrade",
        "cep": "14864-026",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Seccionamento",
        "numeros": "até 178 - lado par"
    },
    {
        "logradouro": "Rua Aurora Mesquita de Andrade",
        "cep": "14864-072",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Seccionamento",
        "numeros": "de 180 ao fim - lado par"
    },
    {
        "logradouro": "Rua Aurora Mesquita de Andrade",
        "cep": "14864-202",
        "bairro": "Jardim Novo Horizonte",
        "tipo": "Seccionamento",
        "numeros": "de 213 ao fim - lado ímpar"
    },
    {
        "logradouro": "Rua Aurora Mesquita de Andrade",
        "cep": "14864-224",
        "bairro": "Jardim Vera Lucia II",
        "tipo": "Seccionamento",
        "numeros": "até 211 - lado ímpar"
    },
    {
        "logradouro": "Rua B1",
        "cep": "14860-224",
        "bairro": "Recanto Beija Flor",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua B2",
        "cep": "14860-226",
        "bairro": "Recanto Beija Flor",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Benedita Alves Barroso",
        "cep": "14864-038",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Benedito Leite",
        "cep": "14864-018",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Benedito Pavan",
        "cep": "14861-014",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Braulino Herculano Zampieri",
        "cep": "14861-032",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Bruna Francielli Carvalho",
        "cep": "14864-078",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua C3",
        "cep": "14860-230",
        "bairro": "Recanto Beija Flor",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Cândida Shirley Rodrigues Saes",
        "cep": "14864-066",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Carlos Alexandre Alves Borges",
        "cep": "14864-602",
        "bairro": "Eplatz Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Carlos Bombonato",
        "cep": "14866-008",
        "bairro": "Jardim Paulista",
        "tipo": "Seccionamento",
        "numeros": "até 1058/1059"
    },
    {
        "logradouro": "Rua Carlos Bombonato",
        "cep": "14866-058",
        "bairro": "Jardim Lisboa",
        "tipo": "Seccionamento",
        "numeros": "de 1060/1061 ao fim"
    },
    {
        "logradouro": "Rua Carlos Gomes",
        "cep": "14866-022",
        "bairro": "Jardim Paulista",
        "tipo": "Seccionamento",
        "numeros": "até 408/409"
    },
    {
        "logradouro": "Rua Carlos Gomes",
        "cep": "14866-112",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Seccionamento",
        "numeros": "de 410/411 ao fim"
    },
    {
        "logradouro": "Rua Carlos Roberto Quiteria",
        "cep": "14866-350",
        "bairro": "Jardim Primavera",
        "tipo": "Seccionamento",
        "numeros": null
    },
    {
        "logradouro": "Rua Carlos Roberto Quiteria",
        "cep": "14866-366",
        "bairro": "Jardim Ouro Verde",
        "tipo": "Seccionamento",
        "numeros": null
    },
    {
        "logradouro": "Rua Carolina de Abreu",
        "cep": "14864-610",
        "bairro": "Eplatz Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Castro Alves",
        "cep": "14866-028",
        "bairro": "Jardim Paulista",
        "tipo": "Seccionamento",
        "numeros": "até 408/409"
    },
    {
        "logradouro": "Rua Castro Alves",
        "cep": "14866-104",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Seccionamento",
        "numeros": "de 410/411 ao fim"
    },
    {
        "logradouro": "Rua Catarina Braido Jordão",
        "cep": "14860-200",
        "bairro": "Vila São José",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Cícero Augusto Batista",
        "cep": "14864-272",
        "bairro": "Jardim Califórnia II",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Cícero José da Silva",
        "cep": "14861-024",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Claudiomiro de Souza",
        "cep": "14866-364",
        "bairro": "Jardim Ouro Verde",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Conceição Jesus Guatelli",
        "cep": "14860-124",
        "bairro": "Parque Mogi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Cordeiro",
        "cep": "14860-031",
        "bairro": "Centro",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Daniel de Abreu",
        "cep": "14860-104",
        "bairro": "Parque Mogi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Danilo Pinheiro da Silva",
        "cep": "14860-052",
        "bairro": "Jardim Raya",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Dante Sartori",
        "cep": "14860-082",
        "bairro": "Jardim Higienópolis",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua David Rigota",
        "cep": "14861-192",
        "bairro": "Jardim Vera Lúcia I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Delmira de Oliveira de Sousa",
        "cep": "14860-222",
        "bairro": "Recanto Beija Flor",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Diocleciano Fernandes Chaves",
        "cep": "14860-210",
        "bairro": "Vila São José",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Diogo Nabarro",
        "cep": "14860-092",
        "bairro": "Jardim Higienópolis",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Diomar Azarias de Souza",
        "cep": "14864-042",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Seccionamento",
        "numeros": "lado ímpar"
    },
    {
        "logradouro": "Rua Diomar Azarias de Souza",
        "cep": "14864-094",
        "bairro": "Jardim Belo Horizonte",
        "tipo": "Seccionamento",
        "numeros": "lado par"
    },
    {
        "logradouro": "Rua Dionizia Campos Gonçalves",
        "cep": "14860-029",
        "bairro": "Centro",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua do Andradas",
        "cep": "14861-140",
        "bairro": "Vila Recreio",
        "tipo": "Seccionamento",
        "numeros": "lado par"
    },
    {
        "logradouro": "Rua do Andradas",
        "cep": "14861-186",
        "bairro": "Jardim Vera Lúcia I",
        "tipo": "Seccionamento",
        "numeros": "lado ímpar"
    },
    {
        "logradouro": "Rua Dom Pedro II",
        "cep": "14861-132",
        "bairro": "Vila Recreio",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Domingos Gonçalves",
        "cep": "14860-037",
        "bairro": "Centro",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Domingos Lisboa",
        "cep": "14866-312",
        "bairro": "Jardim Paineiras",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Doutor Sergio Rossetti",
        "cep": "14861-164",
        "bairro": "Vila Recreio",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Duque de Caxias",
        "cep": "14861-130",
        "bairro": "Vila Recreio",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua E",
        "cep": "14860-232",
        "bairro": "Recanto Beija Flor",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Eduviges Marcelino Ferreira",
        "cep": "14864-616",
        "bairro": "Eplatz Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Elza Delfino Tomazoli",
        "cep": "14866-102",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Euclides da Cunha",
        "cep": "14866-026",
        "bairro": "Jardim Paulista",
        "tipo": "Seccionamento",
        "numeros": "até 418/419"
    },
    {
        "logradouro": "Rua Euclides da Cunha",
        "cep": "14866-106",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Seccionamento",
        "numeros": "de 420/421 ao fim"
    },
    {
        "logradouro": "Rua Fidelcino Antonio Lisboa",
        "cep": "14866-130",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Fioravante Zambonini",
        "cep": "14860-100",
        "bairro": "Parque Mogi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Flaviano Rodrigues Cajaiba",
        "cep": "14864-056",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Floriano Aparecido Scarpim",
        "cep": "14860-056",
        "bairro": "Jardim Raya",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Francisco Carlos de Almeida",
        "cep": "14866-134",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Francisco Cassão",
        "cep": "14866-050",
        "bairro": "Jardim Lisboa",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Francisco Cursio",
        "cep": "14864-312",
        "bairro": "Jardim Colorado II",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Francisco Geraldino Seles",
        "cep": "14864-006",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Francisco Moraes",
        "cep": "14864-088",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Francisco Moreira Barros",
        "cep": "14864-008",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Francisco Osaki",
        "cep": "14864-030",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Seccionamento",
        "numeros": null
    },
    {
        "logradouro": "Rua Francisco Osaki",
        "cep": "14864-074",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Seccionamento",
        "numeros": "de 410 a 630"
    },
    {
        "logradouro": "Rua Francisco Osaki",
        "cep": "14864-240",
        "bairro": "Jardim Califórnia I",
        "tipo": "Seccionamento",
        "numeros": "de 852/853 a 1174/1175"
    },
    {
        "logradouro": "Rua Francisco Osaki",
        "cep": "14864-278",
        "bairro": "Jardim Califórnia II",
        "tipo": "Seccionamento",
        "numeros": "de 1194/1195 a 1374/1375"
    },
    {
        "logradouro": "Rua Francisco Osaki",
        "cep": "14864-298",
        "bairro": "Jardim Colorado I",
        "tipo": "Seccionamento",
        "numeros": "de 1384/1385 a 1624/1625"
    },
    {
        "logradouro": "Rua Francisco Osaki",
        "cep": "14864-320",
        "bairro": "Jardim Colorado II",
        "tipo": "Seccionamento",
        "numeros": "de 1634/1635 a 1884/1885"
    },
    {
        "logradouro": "Rua Galeano de Luca Junior",
        "cep": "14860-202",
        "bairro": "Vila São José",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua General Osório",
        "cep": "14861-138",
        "bairro": "Vila Recreio",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Geraldo Belarmino",
        "cep": "14864-276",
        "bairro": "Jardim Califórnia II",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Gerson Nascimento",
        "cep": "14866-054",
        "bairro": "Jardim Lisboa",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Gilberto Aparecido Zambonini",
        "cep": "14866-314",
        "bairro": "Jardim Paineiras",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Gilberto Vicente Ferreira",
        "cep": "14866-308",
        "bairro": "Jardim Paineiras",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Gilson Gomes Barroso",
        "cep": "14866-362",
        "bairro": "Jardim Ouro Verde",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Gisele Gember Picão",
        "cep": "14860-054",
        "bairro": "Jardim Raya",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Gonçalves Dias",
        "cep": "14866-020",
        "bairro": "Jardim Paulista",
        "tipo": "Seccionamento",
        "numeros": "até 458/459"
    },
    {
        "logradouro": "Rua Gonçalves Dias",
        "cep": "14866-114",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Seccionamento",
        "numeros": "de 460/461 ao fim"
    },
    {
        "logradouro": "Rua Gregorio Vitoriano da Conceicao",
        "cep": "14866-360",
        "bairro": "Jardim Ouro Verde",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Helena Borges Pedral",
        "cep": "14864-212",
        "bairro": "Jardim Novo Horizonte",
        "tipo": "Seccionamento",
        "numeros": "até 539"
    },
    {
        "logradouro": "Rua Helena Borges Pedral",
        "cep": "14864-248",
        "bairro": "Jardim Califórnia I",
        "tipo": "Seccionamento",
        "numeros": "de 559 a 789"
    },
    {
        "logradouro": "Rua Helena Borges Pedral",
        "cep": "14864-286",
        "bairro": "Jardim Califórnia II",
        "tipo": "Seccionamento",
        "numeros": "de 799 a 949"
    },
    {
        "logradouro": "Rua Helena Borges Pedral",
        "cep": "14864-290",
        "bairro": "Jardim Colorado I",
        "tipo": "Seccionamento",
        "numeros": "de 959 a 1169"
    },
    {
        "logradouro": "Rua Helena Pereira dos Santos",
        "cep": "14864-114",
        "bairro": "Jardim Belo Horizonte",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Henrique Xisto",
        "cep": "14866-138",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Hisashi Namba",
        "cep": "14860-060",
        "bairro": "Jardim Raya",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Honório de Figueiredo",
        "cep": "14864-210",
        "bairro": "Jardim Novo Horizonte",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Hugo Gardenghi",
        "cep": "14866-108",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Humberto Biancardi",
        "cep": "14860-021",
        "bairro": "Centro",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Izabel de Souza",
        "cep": "14864-250",
        "bairro": "Jardim Califórnia I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Izolina Ziquielli",
        "cep": "14860-204",
        "bairro": "Vila São José",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Jazon Cayres",
        "cep": "14860-033",
        "bairro": "Centro",
        "tipo": "Seccionamento",
        "numeros": "lado ímpar"
    },
    {
        "logradouro": "Rua Jazon Cayres",
        "cep": "14860-035",
        "bairro": "Centro",
        "tipo": "Seccionamento",
        "numeros": "até 428 - lado par"
    },
    {
        "logradouro": "Rua Jazon Cayres",
        "cep": "14860-050",
        "bairro": "Jardim Raya",
        "tipo": "Seccionamento",
        "numeros": "de 430 ao fim - lado par"
    },
    {
        "logradouro": "Rua Jean de Souza Silva",
        "cep": "14864-304",
        "bairro": "Jardim Colorado I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Joana Conrado de Jesus",
        "cep": "14861-034",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua João Antônio Alves Barroso",
        "cep": "14864-110",
        "bairro": "Jardim Belo Horizonte",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua João Bento de Souza",
        "cep": "14864-112",
        "bairro": "Jardim Belo Horizonte",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua João Bosco Gonçalves de Moura",
        "cep": "14864-116",
        "bairro": "Jardim Belo Horizonte",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua João Manoel de Lima",
        "cep": "14866-004",
        "bairro": "Jardim Paulista",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua João Martins Silva",
        "cep": "14861-002",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua João Rodrigues Carvalheiros",
        "cep": "14864-252",
        "bairro": "Jardim Califórnia I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Joaquim Lúcio Alves",
        "cep": "14864-020",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Seccionamento",
        "numeros": "até 168 - lado par"
    },
    {
        "logradouro": "Rua Joaquim Lúcio Alves",
        "cep": "14864-022",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Seccionamento",
        "numeros": "até 169 - lado ímpar"
    },
    {
        "logradouro": "Rua Joaquim Lúcio Alves",
        "cep": "14864-060",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Seccionamento",
        "numeros": "de 170 ao fim - lado par"
    },
    {
        "logradouro": "Rua Joaquim Lúcio Alves",
        "cep": "14864-062",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Seccionamento",
        "numeros": "de 171 ao fim - lado ímpar"
    },
    {
        "logradouro": "Rua Joaquim Xavier de Oliveira",
        "cep": "14866-304",
        "bairro": "Jardim Paineiras",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua José Akira Kinoshita",
        "cep": "14864-084",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua José Alves Costa",
        "cep": "14861-030",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua José Antonio da Silva",
        "cep": "14864-258",
        "bairro": "Jardim Califórnia I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua José Augusto Reis Pereira",
        "cep": "14864-242",
        "bairro": "Jardim Califórnia I",
        "tipo": "Seccionamento",
        "numeros": "lado par"
    },
    {
        "logradouro": "Rua José Augusto Reis Pereira",
        "cep": "14864-280",
        "bairro": "Jardim Califórnia II",
        "tipo": "Seccionamento",
        "numeros": "lado ímpar"
    },
    {
        "logradouro": "Rua José de Alencar",
        "cep": "14866-024",
        "bairro": "Jardim Paulista",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Jose Feliciano da Silva",
        "cep": "14864-614",
        "bairro": "Eplatz Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua José Felipe",
        "cep": "14864-256",
        "bairro": "Jardim Califórnia I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua José Fiori",
        "cep": "14866-140",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua José Francisco Rodrigues",
        "cep": "14864-204",
        "bairro": "Jardim Novo Horizonte",
        "tipo": "Seccionamento",
        "numeros": "de 195/196 ao fim"
    },
    {
        "logradouro": "Rua José Francisco Rodrigues",
        "cep": "14864-226",
        "bairro": "Jardim Vera Lucia II",
        "tipo": "Seccionamento",
        "numeros": "até 193/194"
    },
    {
        "logradouro": "Rua José Geraldo Constantino",
        "cep": "14860-216",
        "bairro": "Vila São José",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua José Joaquim de Araújo",
        "cep": "14861-044",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Jose Wilson Bezerra da Silva",
        "cep": "14864-618",
        "bairro": "Eplatz Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Julio Ferreira Dourado",
        "cep": "14860-108",
        "bairro": "Parque Mogi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Juvenil Rodrigues Marinho",
        "cep": "14864-016",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Seccionamento",
        "numeros": "até 168/169"
    },
    {
        "logradouro": "Rua Juvenil Rodrigues Marinho",
        "cep": "14864-054",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Seccionamento",
        "numeros": "de 170/171 ao fim"
    },
    {
        "logradouro": "Rua Koiti Hirotani",
        "cep": "14860-086",
        "bairro": "Jardim Higienópolis",
        "tipo": "Seccionamento",
        "numeros": "de 200/201 ao fim"
    },
    {
        "logradouro": "Rua Koiti Hirotani",
        "cep": "14860-088",
        "bairro": "Jardim Higienópolis",
        "tipo": "Seccionamento",
        "numeros": "até 198/199"
    },
    {
        "logradouro": "Rua Laercio Eugenio da Silva",
        "cep": "14864-622",
        "bairro": "Eplatz Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Lindaura de Souza Abreu",
        "cep": "14864-220",
        "bairro": "Jardim Vera Lucia II",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Lino Pupulim",
        "cep": "14866-132",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Lino Rossi",
        "cep": "14866-322",
        "bairro": "Nova Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Ludovico de Oliveira Borges",
        "cep": "14860-120",
        "bairro": "Parque Mogi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Luiz Iziquelli",
        "cep": "14864-068",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Luiz Marcari",
        "cep": "14866-136",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Luiz Monteiro da Silva",
        "cep": "14861-196",
        "bairro": "Jardim Vera Lúcia I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Lupércio Aparecido Garcia",
        "cep": "14861-194",
        "bairro": "Jardim Vera Lúcia I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Machado de Assis",
        "cep": "14866-030",
        "bairro": "Jardim Paulista",
        "tipo": "Seccionamento",
        "numeros": "até 408/409"
    },
    {
        "logradouro": "Rua Machado de Assis",
        "cep": "14866-100",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Seccionamento",
        "numeros": "de 410/411 ao fim"
    },
    {
        "logradouro": "Rua Maestro Estevam Torriani",
        "cep": "14860-003",
        "bairro": "Centro",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Mamud Assim Sucaria",
        "cep": "14860-025",
        "bairro": "Centro",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Manoel Aparecido da Silva",
        "cep": "14864-040",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Manoel Bueno de Andrada",
        "cep": "14861-040",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Manoel Camilo",
        "cep": "14860-208",
        "bairro": "Vila São José",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Manoel Félix Santa Rosa",
        "cep": "14861-046",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Manoel Ferreira de Souza",
        "cep": "14866-346",
        "bairro": "Nova Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Manuel Jorge Cardoso",
        "cep": "14866-040",
        "bairro": "Jardim Lisboa",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Marcia Ribeiro",
        "cep": "14861-012",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Marcos André da Silva",
        "cep": "14866-302",
        "bairro": "Jardim Paineiras",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Marcos Antônio Carvalho",
        "cep": "14864-076",
        "bairro": "Jardim Florentino Binhardi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Marcos Donizete de Godoy",
        "cep": "14866-306",
        "bairro": "Jardim Paineiras",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Marechal Rondon",
        "cep": "14866-014",
        "bairro": "Jardim Paulista",
        "tipo": "Seccionamento",
        "numeros": "até 419/420"
    },
    {
        "logradouro": "Rua Marechal Rondon",
        "cep": "14866-122",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Seccionamento",
        "numeros": "de 421/422 ao fim"
    },
    {
        "logradouro": "Rua Margarida da Silva",
        "cep": "14864-254",
        "bairro": "Jardim Califórnia I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Maria Augusta Goulart",
        "cep": "14864-098",
        "bairro": "Jardim Belo Horizonte",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Maria de Jesus Ferreira Lima",
        "cep": "14864-208",
        "bairro": "Jardim Novo Horizonte",
        "tipo": "Seccionamento",
        "numeros": "de 170/171 ao fim"
    },
    {
        "logradouro": "Rua Maria de Jesus Ferreira Lima",
        "cep": "14864-230",
        "bairro": "Jardim Vera Lucia II",
        "tipo": "Seccionamento",
        "numeros": "até 168/169"
    },
    {
        "logradouro": "Rua Maria de Lourdes Juvenal Dias",
        "cep": "14864-316",
        "bairro": "Jardim Colorado II",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Maria de Lourdes Lima Moraes",
        "cep": "14861-010",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Maria Ferreira Rodrigues Botelho",
        "cep": "14864-274",
        "bairro": "Jardim Califórnia II",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Maria Goreti Ferreira Silva",
        "cep": "14861-004",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Maria Helena Leme Nogueira",
        "cep": "14860-062",
        "bairro": "Jardim Raya",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Maria Neres Teixeira",
        "cep": "14864-606",
        "bairro": "Eplatz Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Maria Rosa Costa de Andrade",
        "cep": "14866-370",
        "bairro": "Jardim Ouro Verde",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Maria Sirlei da Silva",
        "cep": "14861-038",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Maria Valdete Lopes Macedo",
        "cep": "14864-214",
        "bairro": "Jardim Novo Horizonte",
        "tipo": "Seccionamento",
        "numeros": "até 208/209"
    },
    {
        "logradouro": "Rua Maria Valdete Lopes Macedo",
        "cep": "14864-246",
        "bairro": "Jardim Califórnia I",
        "tipo": "Seccionamento",
        "numeros": "de 210/211 a 430/431"
    },
    {
        "logradouro": "Rua Maria Valdete Lopes Macedo",
        "cep": "14864-284",
        "bairro": "Jardim Califórnia II",
        "tipo": "Seccionamento",
        "numeros": "de 440/441 a 590/591"
    },
    {
        "logradouro": "Rua Maria Valdete Lopes Macedo",
        "cep": "14864-292",
        "bairro": "Jardim Colorado I",
        "tipo": "Seccionamento",
        "numeros": "de 600/601 a 850/851"
    },
    {
        "logradouro": "Rua Maria Valdete Lopes Macedo",
        "cep": "14864-326",
        "bairro": "Jardim Colorado II",
        "tipo": "Seccionamento",
        "numeros": "de 861 a 1101 (ao fim)"
    },
    {
        "logradouro": "Rua Marina Francisca Paixão",
        "cep": "14861-200",
        "bairro": "Jardim Vera Lúcia I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Marlene Conceicao de Souza",
        "cep": "14864-620",
        "bairro": "Eplatz Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Maurílio Braga",
        "cep": "14866-048",
        "bairro": "Jardim Lisboa",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Mauro Zambonini",
        "cep": "14861-022",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Motoki Kotó",
        "cep": "14861-160",
        "bairro": "Vila Recreio",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Nascimento Pereira da Silva",
        "cep": "14864-228",
        "bairro": "Jardim Vera Lucia II",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Nelson Bezerra",
        "cep": "14864-064",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Nelson Ferreira de Moraes",
        "cep": "14861-198",
        "bairro": "Jardim Vera Lúcia I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Nelson Gouveia",
        "cep": "14864-052",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Nestor Martins Silva Filho",
        "cep": "14861-134",
        "bairro": "Vila Recreio",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Nilda Margarida Moretto",
        "cep": "14861-042",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Nildo Paschoal de Mattos",
        "cep": "14864-104",
        "bairro": "Jardim Belo Horizonte",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Nivaldo Santucci",
        "cep": "14864-232",
        "bairro": "Jardim Vera Lucia II",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Odalício Souza Santos",
        "cep": "14861-048",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Onobre da Silva",
        "cep": "14860-212",
        "bairro": "Vila São José",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Orlando Antonio Gonçalves",
        "cep": "14860-106",
        "bairro": "Parque Mogi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Orlando Constantino",
        "cep": "14860-112",
        "bairro": "Parque Mogi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Orlando Ribeiro de Souza Filho",
        "cep": "14861-026",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Orlando Silva",
        "cep": "14860-114",
        "bairro": "Parque Mogi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Osvaldo da Silva",
        "cep": "14864-318",
        "bairro": "Jardim Colorado II",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Osvaldo Sagula",
        "cep": "14866-002",
        "bairro": "Jardim Paulista",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Pastor Vicente Vitalino do Nascimento",
        "cep": "14864-096",
        "bairro": "Jardim Belo Horizonte",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Paulo D'Aparecida Lisboa",
        "cep": "14864-102",
        "bairro": "Jardim Belo Horizonte",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Pedro Garcia Cabrera",
        "cep": "14864-296",
        "bairro": "Jardim Colorado I",
        "tipo": "Seccionamento",
        "numeros": "de 26/27 a 156/157"
    },
    {
        "logradouro": "Rua Pedro Garcia Cabrera",
        "cep": "14864-322",
        "bairro": "Jardim Colorado II",
        "tipo": "Seccionamento",
        "numeros": "de 166/167 a 366/367"
    },
    {
        "logradouro": "Rua Pedro Pereira dos Santos",
        "cep": "14864-200",
        "bairro": "Jardim Novo Horizonte",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Plínio Catarino",
        "cep": "14866-032",
        "bairro": "Jardim Paulista",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Possebon Giovanni",
        "cep": "14861-020",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Primo Smecelato",
        "cep": "14860-090",
        "bairro": "Jardim Higienópolis",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Princesa Izabel",
        "cep": "14861-136",
        "bairro": "Vila Recreio",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Rafael Brunini",
        "cep": "14861-162",
        "bairro": "Vila Recreio",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Renato Alves Barbosa",
        "cep": "14866-310",
        "bairro": "Jardim Paineiras",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Roberto de Sousa",
        "cep": "14864-086",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Roberto Raimundo Loraschia",
        "cep": "14861-028",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Rodrigo Valério",
        "cep": "14864-260",
        "bairro": "Jardim Califórnia I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Rubens Fiori",
        "cep": "14866-356",
        "bairro": "Jardim Primavera",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Rui Barbosa",
        "cep": "14866-012",
        "bairro": "Jardim Paulista",
        "tipo": "Seccionamento",
        "numeros": null
    },
    {
        "logradouro": "Rua Rui Barbosa",
        "cep": "14866-124",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Seccionamento",
        "numeros": null
    },
    {
        "logradouro": "Rua Said Luiz Abdo",
        "cep": "14860-206",
        "bairro": "Vila São José",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Santa Leocardia",
        "cep": "14861-128",
        "bairro": "Vila Recreio",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Sant'Clair Antônio Marinho",
        "cep": "14861-018",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Santos Dumont",
        "cep": "14866-018",
        "bairro": "Jardim Paulista",
        "tipo": "Seccionamento",
        "numeros": "até 458/459"
    },
    {
        "logradouro": "Rua Santos Dumont",
        "cep": "14866-118",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Seccionamento",
        "numeros": "de 460/461 ao fim"
    },
    {
        "logradouro": "Rua Sargento Jonas Cavalcanti Senna",
        "cep": "14861-188",
        "bairro": "Jardim Vera Lúcia I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Sargento Renato Benedito Seraphim",
        "cep": "14861-112",
        "bairro": "Vila Nova Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Sebastião Alão",
        "cep": "14860-126",
        "bairro": "Parque Mogi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Sebastião Antônio",
        "cep": "14866-352",
        "bairro": "Jardim Primavera",
        "tipo": "Seccionamento",
        "numeros": null
    },
    {
        "logradouro": "Rua Sebastião Antônio",
        "cep": "14866-374",
        "bairro": "Jardim Ouro Verde",
        "tipo": "Seccionamento",
        "numeros": null
    },
    {
        "logradouro": "Rua Sebastião Neves de Souza",
        "cep": "14866-320",
        "bairro": "Nova Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Sérgio Barbosa Sirino",
        "cep": "14866-046",
        "bairro": "Jardim Lisboa",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Simão Antonio",
        "cep": "14864-032",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Simão Pedro de Lisboa",
        "cep": "14866-354",
        "bairro": "Jardim Primavera",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Sussumo Okano",
        "cep": "14861-158",
        "bairro": "Vila Recreio",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Tiago Xavier de Lima",
        "cep": "14864-270",
        "bairro": "Jardim Califórnia II",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Toshimitu Sobue",
        "cep": "14861-156",
        "bairro": "Vila Recreio",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Urbano Velludo",
        "cep": "14860-110",
        "bairro": "Parque Mogi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Valdemar Alves",
        "cep": "14864-058",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Valdemar Batista Alvarenga",
        "cep": "14864-306",
        "bairro": "Jardim Colorado I",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Valdomiro Francisco da Silva",
        "cep": "14864-070",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Valter Simão dos Santos",
        "cep": "14866-344",
        "bairro": "Nova Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Vamberto Baptista",
        "cep": "14864-608",
        "bairro": "Eplatz Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Vanderlei Bombonato",
        "cep": "14864-080",
        "bairro": "Conj Hab Jardim Florentino Binhardi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Veridiana Carpanezi Alves Garcia",
        "cep": "14861-036",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Victa Aparecida Dias",
        "cep": "14864-206",
        "bairro": "Jardim Novo Horizonte",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Virgílio Merli",
        "cep": "14860-102",
        "bairro": "Parque Mogi",
        "tipo": "Seccionamento",
        "numeros": "até 428/429"
    },
    {
        "logradouro": "Rua Virgílio Merli",
        "cep": "14860-218",
        "bairro": "Vila São José",
        "tipo": "Seccionamento",
        "numeros": "de 430/431 ao fim"
    },
    {
        "logradouro": "Rua Vital Brasil",
        "cep": "14866-016",
        "bairro": "Jardim Paulista",
        "tipo": "Seccionamento",
        "numeros": "até 428/429"
    },
    {
        "logradouro": "Rua Vital Brasil",
        "cep": "14866-120",
        "bairro": "Conj Hab Jardim José Bombonato",
        "tipo": "Seccionamento",
        "numeros": "de 430/431 ao fim"
    },
    {
        "logradouro": "Rua Vitorio Tomazolli",
        "cep": "14864-604",
        "bairro": "Eplatz Barrinha",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Waldemar Cordeiro",
        "cep": "14860-116",
        "bairro": "Parque Mogi",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Walter Merli",
        "cep": "14861-016",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Wellington Gonçalves da Silva",
        "cep": "14861-008",
        "bairro": "Jardim Nova Aliança",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Yatao Hirotani",
        "cep": "14864-004",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Rua Yoshio Kinoshita",
        "cep": "14864-010",
        "bairro": "Conj Hab Albertina Fernandes Fossalussa",
        "tipo": "Seccionamento",
        "numeros": "até 568/569"
    },
    {
        "logradouro": "Rua Yoshio Kinoshita",
        "cep": "14864-108",
        "bairro": "Jardim Belo Horizonte",
        "tipo": "Seccionamento",
        "numeros": "de 570/571 ao 589/590"
    },
    {
        "logradouro": "Rua Zelindo Zaninelli",
        "cep": "14861-116",
        "bairro": "Vila Nova Barrinha",
        "tipo": "Seccionamento",
        "numeros": "até 358 - lado par"
    },
    {
        "logradouro": "Rua Zelindo Zaninelli",
        "cep": "14861-124",
        "bairro": "Vila Recreio",
        "tipo": "Seccionamento",
        "numeros": "de 360 ao fim - lado par"
    },
    {
        "logradouro": "Rua Zelindo Zaninelli",
        "cep": "14861-126",
        "bairro": "Vila Recreio",
        "tipo": "Seccionamento",
        "numeros": "de 361 ao fim - lado ímpar"
    },
    {
        "logradouro": "Travessa Décio Freitas Ribeiro",
        "cep": "14861-168",
        "bairro": "Vila Recreio",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Travessa João Mariussi",
        "cep": "14861-172",
        "bairro": "Vila Recreio",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Travessa José Dezorzi",
        "cep": "14861-166",
        "bairro": "Vila Recreio",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Travessa Mauro de Souza",
        "cep": "14861-174",
        "bairro": "Vila Recreio",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Travessa Oswaldo Cardinali",
        "cep": "14861-170",
        "bairro": "Vila Recreio",
        "tipo": "Simples",
        "numeros": null
    },
    {
        "logradouro": "Unidade H",
        "cep": "14866-152",
        "bairro": "Distrito Industrial",
        "tipo": "Simples",
        "numeros": null
    }
];

// Carregar o arquivo JSON
fetch('ceps_barrinha_v3.json')
    .then(response => response.json())
    .then(data => {
        cepsData = data;
        showAllSuggestions(); // Mostrar todas as sugestões ao carregar
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));

// Função para filtrar resultados
function filterResults() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filterOption = document.querySelector('input[name="filter"]:checked').value;
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Limpar resultados anteriores

    if (!query.trim()) {
        showAllSuggestions();
        return;
    }

    const filteredData = cepsData.filter(item => {
        if (filterOption === 'logradouro') {
            return query.split(' ').every(word => item.logradouro.toLowerCase().includes(word));
        } else if (filterOption === 'cep') {
            return item.cep.includes(query);
        }
    });

    displayResults(filteredData);
}

// Função para exibir resultados
function displayResults(data) {
    const resultsContainer = document.getElementById('resultsContainer');
    if (data.length === 0) {
        resultsContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    } else {
        data.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `<strong>${item.logradouro}</strong><br>Bairro: ${item.bairro}<br>CEP: ${item.cep}`;
            resultsContainer.appendChild(resultItem);
        });
    }
}

// Função para mostrar todas as sugestões
function showAllSuggestions() {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Limpar sugestões anteriores
    displayResults(cepsData.slice(0, 10)); // Mostrar apenas as primeiras 10 sugestões
}

// Mostrar sugestões ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    if (cepsData.length > 0) {
        showAllSuggestions();
    }
});