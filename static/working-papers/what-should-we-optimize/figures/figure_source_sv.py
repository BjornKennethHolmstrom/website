"""Svensk återgivning av WP0 figur 1 från originalets oförändrade numeriska data.

Original: systemic-optimization/papers/wp0/figures/figure_source.py
Detta är en lokaliserad figur, inte en ny analys.
"""
from pathlib import Path
import matplotlib.pyplot as plt
import numpy as np

names = [
    'E · enkäten tar en period',
    'C · kostnad 0,375',
    'C · kostnad 0,075',
    'C · gratis parallellt',
    'F · gratis före handling',
]
vals = np.array([-0.0000028, -0.0006965, 0.1054615, 0.2087964, 0.2185307])
lo = np.array([-0.0000079, -0.0077433, 0.0567365, 0.1689458, 0.1444821])
hi = np.array([0.0000004, 0.0058062, 0.1516900, 0.2457373, 0.2864174])
y = np.arange(len(names))
fig, ax = plt.subplots(figsize=(9.8, 4.2), dpi=180)
ax.axvline(0, ls='--', lw=0.8, alpha=0.6)
for i in range(len(vals)):
    ax.errorbar(vals[i], y[i],
                xerr=[[vals[i] - lo[i]], [hi[i] - vals[i]]],
                fmt='o', capsize=3, markersize=6, elinewidth=1.6)
ax.set_yticks(y, names)
ax.invert_yaxis()
ax.set_xlim(-0.018, 0.315)
ax.set_xlabel('Återvunnen andel av värdegapet informerad–likformig (kvot av medelvärden)')
ax.grid(axis='x', lw=0.35, alpha=0.32)
ax.spines[['top', 'right', 'left']].set_visible(False)
fig.suptitle('Lärandets värde beror på hur informationen inhämtas', fontsize=13, y=0.98)
fig.text(0.995, 0.01,
         'B5 testpool, 800 världar · 95 % explorativa bootstrapintervall · E fortsatt konfirmerande',
         ha='right', fontsize=8)
fig.subplots_adjust(left=0.275, right=0.97, top=0.87, bottom=0.2)
fig.savefig(Path(__file__).with_name('b5_learning_cost_sv.png'), dpi=220, bbox_inches='tight')
