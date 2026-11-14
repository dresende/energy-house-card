# Energy House Card

Card para o Home Assistant com uma casa isométrica e os fluxos de energia animados entre painéis solares, bateria, casa, carro e rede.

## Instalar

### Com HACS

1. Em **HACS → ⋮ → Repositórios personalizados**, adiciona `https://github.com/dresende/energy-house-card` com o tipo **Dashboard**.
2. Procura "Energy House Card" no HACS e instala.
3. Recarrega o browser e adiciona um card manual com o YAML abaixo.

### Manual

1. Copia `energy-house-card.js` para `/config/www/`.
2. Em **Definições → Painéis → ⋮ → Recursos**, adiciona `/local/energy-house-card.js` com o tipo **Módulo JavaScript**.
3. Recarrega o browser e adiciona um card manual com o YAML abaixo.

## Configuração mínima

```yaml
type: custom:energy-house-card
title: Energia
entities:
  solar_power: sensor.solar_power          # W ou kW
  home_power: sensor.home_power            # consumo total (inclui o carro)
  grid_power: sensor.grid_power            # + importa, − exporta
  battery_power: sensor.battery_power      # + descarrega, − carrega
  battery_soc: sensor.battery_soc
  car_power: sensor.car_charger_power
  car_soc: sensor.car_battery_level
  car_plugged: binary_sensor.car_plugged   # opcional
  # totais do dia (opcionais, aparecem no rodapé)
  solar_energy_today: sensor.solar_energy_today
  home_energy_today: sensor.home_energy_today
  grid_import_today: sensor.grid_import_today
  grid_export_today: sensor.grid_export_today
  car_energy_today: sensor.car_energy_today
```

Se a tua rede ou bateria usarem o sinal ao contrário, acrescenta `invert_grid: true` ou `invert_battery: true`. Sem `home_power`, o consumo é calculado a partir de solar + bateria + rede.

## Opções

| Opção | Por defeito | Para que serve |
|---|---|---|
| `title` | `Energia` | Título do card |
| `full_screen` | `false` | O card ocupa a altura do ecrã (fica melhor numa vista do tipo **Painel**) |
| `height` | — | Altura fixa, ex. `600px` ou `80vh`; a imagem cresce até caber |
| `show` | conforme as entidades | Partes do desenho: `solar`, `battery`, `car`, `grid`, `vegetation` (ex. `show: { vegetation: false }`) |
| `flow_threshold` | `10` | Abaixo destes W o fluxo fica parado |
| `edit_positions` | `false` | Liga o modo de posicionamento (ver abaixo) |
| `places` | 5 lugares | Lista de valores sobre a imagem |
| `flows` | percursos da casa | Pontos de cada fluxo, em % da imagem |

## Ecrã inteiro

Cria uma vista nova com o tipo **Painel (1 card)** e usa:

```yaml
type: custom:energy-house-card
full_screen: true
entities: ...
```

A casa é vetorial, por isso fica nítida a qualquer tamanho; os valores e os fluxos crescem com ela.

## Pôr os valores onde queres

1. Adiciona `edit_positions: true` ao card.
2. Arrasta os valores e os pontos azuis dos fluxos para o sítio certo.
3. Carrega em **Copiar YAML**, cola o bloco `places:` / `flows:` na configuração e remove `edit_positions`.

Podes acrescentar lugares com qualquer sensor:

```yaml
places:
  - name: Sala
    entity: sensor.sala_temperature
    icon: mdi:thermometer
    decimals: 1
    color: "#e5735a"
    x: 76
    y: 52
```

Um lugar com `role` (`solar`, `home`, `grid`, `battery`, `car`) substitui o lugar por defeito desse papel e passa a alimentar os fluxos.

## Sem carro, sem bateria, sem painéis

A casa é desenhada em SVG dentro do card, por isso cada parte aparece só quando faz sentido. Se não configurares `car_power`, desaparecem o carro, o telheiro, a wallbox, o valor do carro e o fluxo casa→carro. O mesmo acontece com `battery_power` (bateria), `solar_power` (painéis) e `grid_power` (poste e cabos). Para forçar, usa `show`:

```yaml
show:
  car: false        # esconde o carro mesmo com entidades configuradas
  vegetation: false # casa sem jardim
```

## Desenvolvimento

```
src/card.js               código do card (a casa entra no lugar de "__HOUSE_SVG__")
src/house.svg             desenho da casa
tools/house-generator.html  gerador da casa, com as partes em grupos (#solar, #battery, #ev, #grid…)
tools/extract_svg.py      gerador → src/house.svg
tools/build.py            src/ → energy-house-card.js
```

Depois de mudar a casa no gerador:

```bash
python3 tools/extract_svg.py && python3 tools/build.py
```

Depois de mudar só o código, basta `python3 tools/build.py`. O `energy-house-card.js` gerado vai no repositório, porque é o ficheiro que o HACS instala.

Para ver o card sem Home Assistant, corre `python3 -m http.server` na pasta e abre `http://localhost:8000/preview.html`. O preview tem dados simulados, tema claro/escuro, ecrã inteiro, modo de posicionamento e cenários sem carro e sem bateria.
