# Teste Vocacional das Pastorais

Ferramenta de discernimento para descobrir em qual **pastoral paroquial** cada fiel pode ser chamado a servir, com referência às diretrizes da [CNBB](https://www.cnbb.org.br/pastorais/).

Desenvolvido com React + Vite.

**Repositório:** [github.com/ronaldomelofz/vocacionalgeral](https://github.com/ronaldomelofz/vocacionalgeral)  
**Site (produção):** [vocacionalpastoral.netlify.app](https://vocacionalpastoral.netlify.app/)  
**Pastorais (referência nacional):** [cnbb.org.br/pastorais](https://www.cnbb.org.br/pastorais/)

---

## Sobre as pastorais

As pastorais são grupos de leigos e leigas organizados sob a direção do pároco para atender necessidades específicas, evangelizar e cuidar da comunidade. Embora variem de acordo com a realidade de cada paróquia, costumam agrupar-se em:

- **Litúrgicas e de celebração** — liturgia, música (coral e canto), acolhida, batismo e matrimônio, acólitos, MESCE
- **Educação e formação** — catequese, dízimo
- **Sociais e de caridade** — criança, saúde, carcerária, povo de rua
- **Grupos específicos** — familiar, juventude, pessoa idosa
- **Apoio** — comunicação (PASCOM), vocacional

Paróquias também podem abrigar **movimentos e associações** (Apostolado da Oração, Terço dos Homens, Renovação Carismática, Legião de Maria etc.), que possuem espiritualidade própria, mas atuam em comunhão com as pastorais.

Na página inicial é possível **ver todas as pastorais** com uma breve explicação de cada uma.

---

## Publicar no Netlify via GitHub (recomendado)

Cada `git push` na branch `main` pode gerar deploy automático no Netlify.

1. Acesse [Netlify — Add new site](https://app.netlify.com/teams/ronaldomelofz/projects) → **Add new site** → **Import an existing project**
2. Escolha **GitHub** e autorize o acesso à conta `ronaldomelofz`
3. Selecione o repositório **vocacionalgeral**
4. Confirme as configurações (já definidas em `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Em **Site settings → Domain management**, use o site `vocacionalpastoral` ou o domínio desejado
6. Clique em **Deploy site**

### Deploy manual (alternativa)

```bash
npm install
npm run build
# Arraste a pasta dist em https://app.netlify.com/drop
# ou execute: .\deploy.ps1
```

---

## Estrutura do projeto

```
vocacionalgeral/
├── index.html
├── netlify.toml
├── package.json
└── src/
    ├── main.jsx
    └── App.jsx
```

---

## Frentes avaliadas (19)

O teste considera pastorais paroquiais comuns e alguns movimentos frequentes nas comunidades brasileiras. Para diretrizes e pastorais nacionais, consulte sempre a [CNBB](https://www.cnbb.org.br/pastorais/).

| Área | Exemplos no teste |
|------|-------------------|
| Litúrgicas | Litúrgica, Música (Coral & Canto), Acolhida, Batismo, Matrimônio |
| Formação | Catequese, Dízimo |
| Sociais | Saúde/MESCE, Menor/Criança, Caridade, Campanha da Fraternidade |
| Grupos | Familiar, Juventude, Pessoa Idosa, Casais |
| Apoio | PASCOM, Vocacional |
| Movimentos | Legião de Maria, RCC |

---

## Desenvolvimento local

```bash
git clone https://github.com/ronaldomelofz/vocacionalgeral.git
cd vocacionalgeral
npm install
npm run dev
```

Acesse http://localhost:5173

O workflow [`.github/workflows/ci.yml`](.github/workflows/ci.yml) valida o build em cada push e pull request.

---

Desenvolvido para o serviço pastoral na Igreja Católica — em comunhão com as pastorais locais e a CNBB.
