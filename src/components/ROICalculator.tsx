import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, Users, ArrowRight, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";

const ROICalculator = () => {
  const [monthlyVisitors, setMonthlyVisitors] = useState(1000);
  const [conversionRate, setConversionRate] = useState(2);
  const [averageOrderValue, setAverageOrderValue] = useState(500);
  const [showResults, setShowResults] = useState(false);

  // Calculations
  const currentMonthlyLeads = Math.round((monthlyVisitors * conversionRate) / 100);
  const currentMonthlyRevenue = currentMonthlyLeads * averageOrderValue;

  // SEO improvement projections (conservative 3x traffic increase over 12 months)
  const projectedVisitors = monthlyVisitors * 3;
  const projectedLeads = Math.round((projectedVisitors * (conversionRate * 1.2)) / 100); // 20% better conversion from better-qualified traffic
  const projectedMonthlyRevenue = projectedLeads * averageOrderValue;

  const monthlyRevenueIncrease = projectedMonthlyRevenue - currentMonthlyRevenue;
  const annualRevenueIncrease = monthlyRevenueIncrease * 12;

  // Assuming average SEO investment
  const estimatedSEOInvestment = 2000; // monthly
  const annualInvestment = estimatedSEOInvestment * 12;
  const roi = Math.round(((annualRevenueIncrease - annualInvestment) / annualInvestment) * 100);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-US").format(value);
  };

  return (
    <section id="roi-calculator" className="py-20 bg-secondary/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            SEO ROI Calculator
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Calculate Your SEO Potential
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how much revenue you could generate with professional SEO services
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-background border border-border/50 shadow-lg"
            >
              <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Your Current Metrics
              </h3>

              <div className="space-y-8">
                {/* Monthly Visitors */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      Monthly Website Visitors
                    </Label>
                    <span className="font-semibold text-primary">
                      {formatNumber(monthlyVisitors)}
                    </span>
                  </div>
                  <Slider
                    value={[monthlyVisitors]}
                    onValueChange={(value) => {
                      setMonthlyVisitors(value[0]);
                      setShowResults(false);
                    }}
                    min={100}
                    max={50000}
                    step={100}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>100</span>
                    <span>50,000</span>
                  </div>
                </div>

                {/* Conversion Rate */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-muted-foreground" />
                      Conversion Rate (%)
                    </Label>
                    <span className="font-semibold text-primary">{conversionRate}%</span>
                  </div>
                  <Slider
                    value={[conversionRate]}
                    onValueChange={(value) => {
                      setConversionRate(value[0]);
                      setShowResults(false);
                    }}
                    min={0.5}
                    max={10}
                    step={0.5}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0.5%</span>
                    <span>10%</span>
                  </div>
                </div>

                {/* Average Order Value */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      Average Deal/Order Value
                    </Label>
                    <span className="font-semibold text-primary">
                      {formatCurrency(averageOrderValue)}
                    </span>
                  </div>
                  <Slider
                    value={[averageOrderValue]}
                    onValueChange={(value) => {
                      setAverageOrderValue(value[0]);
                      setShowResults(false);
                    }}
                    min={50}
                    max={10000}
                    step={50}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$50</span>
                    <span>$10,000</span>
                  </div>
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full gap-2"
                  onClick={() => setShowResults(true)}
                >
                  Calculate My ROI
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg"
            >
              <h3 className="font-display text-xl font-bold mb-6">
                {showResults ? "Your SEO Potential" : "Current Performance"}
              </h3>

              {!showResults ? (
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-primary-foreground/10">
                    <p className="text-sm opacity-80 mb-1">Current Monthly Leads</p>
                    <p className="text-3xl font-bold">{formatNumber(currentMonthlyLeads)}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary-foreground/10">
                    <p className="text-sm opacity-80 mb-1">Current Monthly Revenue</p>
                    <p className="text-3xl font-bold">{formatCurrency(currentMonthlyRevenue)}</p>
                  </div>
                  <p className="text-sm opacity-80 text-center pt-4">
                    Click "Calculate My ROI" to see your potential with SEO
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Projected Results */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-primary-foreground/10">
                      <p className="text-xs opacity-80 mb-1">Projected Monthly Traffic</p>
                      <p className="text-xl font-bold">{formatNumber(projectedVisitors)}</p>
                      <p className="text-xs text-accent">+200% increase</p>
                    </div>
                    <div className="p-4 rounded-xl bg-primary-foreground/10">
                      <p className="text-xs opacity-80 mb-1">Projected Monthly Leads</p>
                      <p className="text-xl font-bold">{formatNumber(projectedLeads)}</p>
                      <p className="text-xs text-accent">
                        +{Math.round(((projectedLeads - currentMonthlyLeads) / currentMonthlyLeads) * 100)}%
                      </p>
                    </div>
                  </div>

                  {/* Big Number */}
                  <div className="p-6 rounded-xl bg-primary-foreground/20 text-center">
                    <p className="text-sm opacity-80 mb-2">Potential Annual Revenue Increase</p>
                    <p className="text-4xl font-bold text-accent">
                      {formatCurrency(annualRevenueIncrease)}
                    </p>
                    <p className="text-sm opacity-80 mt-2">
                      {roi > 0 ? `${roi}% ROI` : "Let's discuss your goals"}
                    </p>
                  </div>

                  {/* Monthly breakdown */}
                  <div className="p-4 rounded-xl bg-primary-foreground/10">
                    <p className="text-sm opacity-80 mb-1">Monthly Revenue Growth</p>
                    <p className="text-2xl font-bold">+{formatCurrency(monthlyRevenueIncrease)}</p>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 space-y-3">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full gap-2"
                      asChild
                    >
                      <Link to="/free-audit">
                        Get Your Free SEO Audit
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <p className="text-xs text-center opacity-70">
                      *Based on industry averages. Actual results may vary.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
