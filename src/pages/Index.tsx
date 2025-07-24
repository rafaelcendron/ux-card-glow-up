import { ActivityCard } from "@/components/dashboard/ActivityCard";

const Index = () => {
  return (
    <div className="min-h-screen dashboard-bg p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Dashboard de Atividades
          </h1>
          <p className="text-muted-foreground">
            Acompanhe o progresso das suas atividades com uma visão clara e intuitiva
          </p>
        </div>

        {/* Layout horizontal com 4 cards conforme a imagem */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <ActivityCard
            title="TOTAL DE ATIVIDADES"
            totalHours={728.04}
            totalActivities={276}
            period="Apontamento do mês"
          />

          <ActivityCard
            title="NOVAS DEMANDAS"
            totalHours={347.42}
            totalActivities={131}
            period="47.7% do total"
          />

          <ActivityCard
            title="BUGS"
            totalHours={153.64}
            totalActivities={69}
            period="21.1% do total"
          />

          <ActivityCard
            title="OUTROS"
            totalHours={226.99}
            totalActivities={76}
            period="31.2% do total"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
